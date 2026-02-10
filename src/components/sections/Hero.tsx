import { PERSONAL_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 tracking-wider uppercase">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] text-foreground">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            {PERSONAL_INFO.title} &bull; {PERSONAL_INFO.experience}
          </p>
          <p className="text-2xl md:text-4xl font-headline font-light text-foreground/80 leading-relaxed mb-12 max-w-3xl">
            {PERSONAL_INFO.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full group" asChild>
              <a href="#">
                Download Resume
                <Download className="ml-2 h-5 w-5 opacity-70 group-hover:opacity-100" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}