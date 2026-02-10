import { PERSONAL_INFO } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Layout, Zap, Trophy } from "lucide-react";

export function About() {
  const values = [
    { icon: Layout, title: "Product Thinking", desc: "Understanding the 'why' before the 'how' to build features that matter." },
    { icon: Zap, title: "UI Architecture", desc: "Crafting scalable, reusable system foundations for enterprise applications." },
    { icon: CheckCircle2, title: "Performance & Scalability", desc: "Sub-second load times and interfaces that grow with your user base." },
    { icon: Trophy, title: "Ownership Mindset", desc: "Taking end-to-end responsibility from initial ideation to final deployment." }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
              A decade of engineering digital experiences that scale.
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{PERSONAL_INFO.about}</p>
              <p>
                I believe that modern frontend engineering is where business strategy meets user delight. My approach is centered on creating high-fidelity, high-performance web applications that don't just work—they feel effortless.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="border-none shadow-sm bg-background/50 hover:bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="pt-8">
                  <v.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}