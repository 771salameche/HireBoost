import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    text: "HireBoost's CV Analyzer gave me tips I never would have thought of. Landed 3 interviews in a week!",
    avatar: "AJ"
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    text: "The Interview Simulator is incredibly realistic. I felt so much more confident during my actual interviews.",
    avatar: "SC"
  },
  {
    name: "Michael Miller",
    role: "Marketing Director",
    text: "Finally, an AI tool that actually understands my career goals and matches me with relevant roles.",
    avatar: "MM"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our <span className="gold-text">Users Say</span></h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-8 flex-1">"{t.text}"</p>
              <Avatar className="h-12 w-12 mb-3">
                <AvatarFallback className="gold-gradient text-primary-foreground font-bold">{t.avatar}</AvatarFallback>
              </Avatar>
              <div className="font-bold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
