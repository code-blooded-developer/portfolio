import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Career Timeline</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Impact & Leadership.</h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-0 border-l md:border-l-0 border-primary/20 md:grid md:grid-cols-[200px_1fr] gap-12 items-start group">
              <div className="mb-2 md:mb-0">
                <span className="text-sm font-bold text-primary bg-primary/5 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <div className="relative">
                {/* Desktop timeline marker */}
                <div className="hidden md:block absolute -left-[calc(24px+100px)] top-2 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:scale-125 transition-transform" />
                
                <h4 className="text-2xl font-bold mb-1 text-foreground">{exp.company}</h4>
                <p className="text-lg font-semibold text-primary/80 mb-4">{exp.role}</p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}