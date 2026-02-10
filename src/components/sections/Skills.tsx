import { SKILLS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Expertise built over a decade.</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {SKILLS.map((skillGroup, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-xl font-bold text-foreground border-b border-primary/20 pb-2 inline-block">
                {skillGroup.category}
              </h4>
              <div className="flex flex-col gap-3">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 group">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}