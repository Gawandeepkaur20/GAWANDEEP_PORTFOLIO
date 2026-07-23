// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";
// import { Card } from "@/components/ui/Card";
// import { Section } from "@/components/ui/Section";
// import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

// const testimonials = [
//   {
//     quote: "Gawandeep brings clarity to ambiguous technical problems and turns early ideas into structured execution.",
//     name: "Mentor Placeholder",
//     role: "AI Program Reviewer",
//   },
//   {
//     quote: "Her leadership style is practical, generous, and focused on helping the team ship better work.",
//     name: "Community Placeholder",
//     role: "GDG Collaborator",
//   },
//   {
//     quote: "The strongest signal in her work is the balance of product thinking, polish, and engineering care.",
//     name: "Peer Placeholder",
//     role: "Project Teammate",
//   },
// ];

// export function TestimonialsSection() {
//   return (
//     <Section
//       id="testimonials"
//       eyebrow="Testimonials"
//       title="Designed placeholders for future proof."
//       description="These testimonial cards are ready to be replaced with real quotes while preserving the layout and visual rhythm."
//       className="bg-surface/25"
//     >
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-80px" }}
//         className="grid gap-4 md:grid-cols-3"
//       >
//         {testimonials.map((testimonial) => (
//           <motion.div key={testimonial.name} variants={fadeUp} whileHover={hoverLift}>
//             <Card className="h-full">
//               <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
//               <p className="mt-5 text-sm leading-7 text-muted-foreground">{testimonial.quote}</p>
//               <div className="mt-6 border-t border-border/70 pt-4">
//                 <p className="font-semibold">{testimonial.name}</p>
//                 <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//               </div>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </Section>
//   );
// }
