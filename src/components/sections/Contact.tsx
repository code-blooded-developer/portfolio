import { PERSONAL_INFO } from "@/lib/data";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-6">Let's Connect</h2>
            <h3 className="text-5xl md:text-7xl font-headline font-black mb-8 leading-tight">
              Ready to build <br /> something great?
            </h3>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-md leading-relaxed mb-12">
              Available for high-impact frontend leadership or bespoke full-stack freelance projects.
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="flex items-center justify-between p-8 bg-white/10 hover:bg-white/20 rounded-3xl transition-all group backdrop-blur-sm"
            >
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest block opacity-70 mb-1">Email Me</span>
                  <span className="text-xl md:text-2xl font-bold">{PERSONAL_INFO.email}</span>
                </div>
              </div>
              <ArrowUpRight className="h-8 w-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-8 bg-white/10 hover:bg-white/20 rounded-3xl transition-all group backdrop-blur-sm"
              >
                <Linkedin className="h-8 w-8 mb-4" />
                <span className="text-xs font-bold uppercase tracking-widest block opacity-70 mb-1">LinkedIn</span>
                <span className="text-lg font-bold">Harish Mohanani</span>
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-8 bg-white/10 hover:bg-white/20 rounded-3xl transition-all group backdrop-blur-sm"
              >
                <Github className="h-8 w-8 mb-4" />
                <span className="text-xs font-bold uppercase tracking-widest block opacity-70 mb-1">GitHub</span>
                <span className="text-lg font-bold">@harish</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -z-0" />
    </section>
  );
}