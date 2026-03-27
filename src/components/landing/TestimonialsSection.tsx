import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah Chen", role: "Product Designer at Google", text: "HireBoost helped me tailor my CV perfectly. I got 3 interview calls within a week!", avatar: "SC" },
  { name: "Marcus Johnson", role: "Software Engineer", text: "The interview simulator was incredibly realistic. I felt so prepared walking into my final round.", avatar: "MJ" },
  { name: "Emily Rodriguez", role: "Marketing Manager", text: "The AI-generated cover letter was better than anything I could've written myself. Landed my dream job!", avatar: "ER" },
];

export const TestimonialsSection = () => (
  <section className="py-24 border-t border-border/50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Loved by <span className="gold-text">Professionals</span></h2>
        <p className="mt-4 text-muted-foreground">See what our users are saying.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-sm font-bold text-primary-foreground">{t.avatar}</div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            <div className="mt-4 flex gap-1">
              {Array(5).fill(0).map((_, j) => (
                <span key={j} className="text-primary text-sm">★</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
