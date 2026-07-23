export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResult = {
  ok: boolean;
  message: string;
};

const rateKey = "gk-contact-last-sent";

export async function sendContactMessage(payload: ContactPayload): Promise<ContactResult> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const lastSent = Number(window.localStorage.getItem(rateKey) ?? 0);

  if (Date.now() - lastSent < 60_000) {
    return { ok: false, message: "Please wait a minute before sending another message." };
  }

  if (!serviceId || !templateId || !publicKey) {
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    window.localStorage.setItem(rateKey, String(Date.now()));
    return {
      ok: true,
      message: "Message validated locally. Add EmailJS environment variables to send it from production.",
    };
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: payload,
    }),
  });

  if (!response.ok) {
    return { ok: false, message: "EmailJS could not send the message. Please try again." };
  }

  window.localStorage.setItem(rateKey, String(Date.now()));
  return { ok: true, message: "Message sent successfully." };
}
