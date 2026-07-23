import { WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

export function OfflineBanner() {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="fixed inset-x-4 top-24 z-[85] mx-auto flex max-w-md items-center gap-3 rounded-lg border border-warning/40 bg-surface p-3 text-sm shadow-soft-xl">
      <WifiOff className="h-4 w-4 text-warning" aria-hidden="true" />
      You are offline. Local portfolio features still work; network modules will retry when connected.
    </div>
  );
}
