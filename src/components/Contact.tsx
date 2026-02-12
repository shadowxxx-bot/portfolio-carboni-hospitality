import { GlowCard } from "@/components/ui/glow-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-8 gap-6">
          <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
          <h2 className="text-4xl font-bold whitespace-nowrap">Get in Touch</h2>
          <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
        </div>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Interested in collaborating or learning more about past projects? Let's talk.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-3">
              <label htmlFor="name" className="text-lg font-medium block">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-lg py-6"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <label htmlFor="email" className="text-lg font-medium block">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-lg py-6"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <label htmlFor="message" className="text-lg font-medium block">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-[200px] text-lg resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <GlowCard
                customSize
                glowColor="blue"
                className="cursor-pointer bg-primary/10 hover:bg-primary/20 transition-all"
                width="100%"
                height="auto"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </GlowCard>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
