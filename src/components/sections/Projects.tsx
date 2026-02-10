import { PROJECTS } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Selected Projects
            </h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
              Real-world challenges. <br /> Technical solutions.
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm">
            A showcase of architectural decisions and problem-solving at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <Card
              key={i}
              className="flex flex-col overflow-hidden border-none shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500 group"
            >
              <CardHeader className="bg-white pb-6 pt-10 px-8">
                <CardTitle className="text-3xl font-bold mb-4">
                  {p.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/5 font-semibold px-2"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-8 bg-white px-8">
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    Description
                  </h4>
                  <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                    {p.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="bg-white/50 border-t flex gap-4 p-8">
                <Button
                  variant="default"
                  className="rounded-full shadow-lg shadow-primary/20 flex-1 sm:flex-none"
                  asChild
                >
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full flex-1 sm:flex-none"
                  asChild
                >
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Repository
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
