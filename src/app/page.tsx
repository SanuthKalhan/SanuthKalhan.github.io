import Hero from '../components/ui/Hero';
import Chapter from '../components/ui/Chapter';
import ProjectCard from '../components/ui/ProjectCard';
import SkillCloud from '../components/ui/SkillCloud';
import DownloadCV from '../components/ui/DownloadCV';
import { Highlight } from '../components/ui/Highlight';

export default function Portfolio() {
  return (

    <main className="relative min-h-screen selection:bg-emerald-500/30 overflow-x-clip">
      {/*  SCROLLING BACKGROUND FEATURES  */}
      <div className="bg-canvas">
        <div className="bg-grid-blueprint" />
        <div className="bg-math-blueprint" />
      </div>

      {/* FIXED TEXTURE OVERLAY */}
      <div className="bg-grain-fixed" />

      {/* MARGINAL ANNOTATIONS (Marginalia) */}
      <div className="hidden xl:block">
        <div className="fixed left-6 top-1/3 [writing-mode:vertical-rl] text-[10px] text-gray-400 font-mono tracking-[0.5em] opacity-40 select-none">
          SANUTH_KALHAN
        </div>
        <div className="fixed right-6 bottom-1/4 [writing-mode:vertical-rl] text-[10px] text-gray-400 font-mono tracking-[0.5em] opacity-40 rotate-180 select-none">
          UCSC_SOFTWARE_ENGINEERING_2026
        </div>
      </div>

      <div className="relative px-6 md:px-10 z-10">
        <DownloadCV />
        <Hero />

        {/* CHAPTER 01: FOUNDATIONS */}
        <Chapter number="01" title="Foundations">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            {/* Left Column: Text Content */}
            <div className="max-w-2xl">
              <p className="text-2xl md:text-3xl font-light mb-8 leading-relaxed italic text-gray-800">
                 <span className="text-emerald-500 font-bold">"</span>The goal isn’t just to write code, but to architect intelligence with elegant design.<span className="text-emerald-500 font-bold">"</span>
              </p>
              <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-600">
                Currently pursuing a{" "}<Highlight delay={0.2}>BSc (Hons) in Software Engineering</Highlight> at the  <span className="text-gray-600">University of Colombo School of Computing (UCSC)</span>. 
                Maintaining a GPA of 3.4/4.0 while exploring the intersection of code and intelligence. <span className='text-sm italic'>(2022 - 2026 )</span>
              </p>
            </div>

            {/* Right Column: Image & Metric */}
            <div className="flex flex-col items-center md:items-start relative">
               <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 text-[80px] md:text-[120px] font-serif text-emerald-500/50 select-none pointer-events-none italic">
                 lim
                 <span className="block text-xs md:text-sm text-center -mt-4 md:-mt-8 font-sans">Δx→0</span>
               </div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 z-10">
                <img 
                  src="assets/found.webp" 
                  alt="Foundation Illustration" 
                  className="rounded-2xl object-contain filter grayscale hover:grayscale-0 transition-all duration-500 w-full h-full"
                />
              </div>
              
              <div className="pt-4 text-center md:text-left">
                <span className="text-5xl md:text-6xl font-bold text-black/20 leading-none select-none">3.4</span>
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 ml-1">Current GPA</p>
              </div>
            </div>
          </div>
        </Chapter>

        {/* CHAPTER 02: THE CRAFT (EXPERIENCE) */}
        <Chapter number="02" title="Proficiency">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 pl-12 md:pl-32">
            
            {/* THE ARCHITECTURAL TIMELINE */}
            <div className="absolute left-4 md:left-14 top-0 bottom-0 w-px flex flex-col items-center">
              <div className="h-12 w-0.5 border-2 border-dashed border-black/10" />
              
              <div className="relative w-full flex justify-end">
                <span className="absolute right-4 -top-1 text-[10px] md:text-[12px] font-mono text-gray-400 whitespace-nowrap tracking-tighter">
                  2024 NOV -
                </span>
              </div>

              <div className="grow w-0.5 rounded bg-emerald-500/40" />

              <div className="relative w-full flex justify-end">
                <span className="absolute right-4 -top-1 text-[10px] md:text-[12px] font-mono text-gray-400 whitespace-nowrap tracking-tighter">
                  2025 MAY -
                </span>
              </div>

              <div className="h-12 w-0.5 border-2 border-dashed border-black/10" />
            </div>

            {/* CONTENT COLUMN */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Scienter Technologies</h3>
              <p className="text-emerald-500 mb-6 md:mb-8 uppercase tracking-widest text-xs md:text-sm font-semibold opacity-80">
                Software Engineer Intern
              </p>
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <li>• Contributed to a large-scale eFinancial system with secure, modular, and scalable architecture.</li>
                <li>• Developed FinTech modules using{" "}<Highlight delay={0.4}>.NET Core, Angular,</Highlight> PrimeNG, and Microfrontends.</li>
                <li>• Collaborated on CI/CD, version control, and code reviews using{" "}<Highlight delay={0.6}>Azure DevOps.</Highlight></li>
                <li>• Optimized{" "}<Highlight delay={0.8}>SQL Server</Highlight> databases for data consistency and performance.</li>
              </ul>
            </div>

            {/* VISUAL MODULE COLUMN */}
            <div className="relative group flex justify-center items-center">
              <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
                  <svg width="200" height="200" className="md:w-70 md:h-70" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="black" fill="none" strokeWidth="0.2" strokeDasharray="1 3" />
                    <circle cx="50" cy="50" r="40" stroke="black" fill="none" strokeWidth="0.5" strokeDasharray="4 2" />
                    <line x1="50" y1="50" x2="85" y2="15" stroke="black" strokeWidth="0.5" />
                    <text x="58" y="42" fontSize="6" className="font-serif italic" fill="black">θ</text>
                  </svg>
              </div>
              
              <div className="bg-black/5 aspect-square rounded-full w-48 md:w-64 flex items-center justify-center border border-black/5 group-hover:border-black/10 transition-all duration-700 z-10">
                <img src="/assets/logo.webp" alt="FinTech_Core" className="rounded-full w-full h-full object-cover border-dotted border-2 border-black/5" />
              </div>

              <div className="absolute -bottom-4 right-0 md:right-10 text-[9px] text-gray-300 font-mono">
                SECURE_BANKING_CORE.dll
              </div>
            </div>
          </div>
        </Chapter>

        {/* CHAPTER 03: THE CRAFT */}
        <Chapter number="03" title="The Craft">
          <div className="space-y-20 md:space-y-32">
            <ProjectCard 
              title="AgroGate"
              description="A no-code, AI-powered platform for precision agriculture, using satellite data to enable users with minimal technical expertise."
              tags={["PyTorch", "U-net++", "GEE", "Geospatial", "Microservices", "NextJS", "Flask"]}
              details={{
                problem: "The challenge was enabling users with minimal technical knowledge to effectively use satellite data for precision agriculture.",
                solution: "Developed a no-code UI that integrates satellite data, AI models, and simulations for decision support.",
                outcomes: [
                  "Empowered farmers with actionable insights from satellite data.",
                  "Designed and trained models for SAR-to-NDVI translation.",
                  "Developed a custom dataset for SAR-to-NDVI (11,000 images)."
                ]
              }}
              imagePlaceholder="/assets/agrogate.webp"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ProjectCard 
                title="NoteMate" 
                description="An AI-powered note-taking app with speech-to-text and BERT summarization." 
                tags={["BERT", "SpringBoot", "Docker", "AWS", "React Native"]}
                details={{
                  problem: "The challenge was creating a seamless note-taking experience with AI-powered features.",
                  solution: "Developed a mobile app with React Native that integrates STT and BERT models.",
                  outcomes: [
                    "Provided users with real-time transcription.",
                    "Optimized cloud workflows for efficient data processing.",
                    "Developed a custom fully functional note-pad"
                  ]
                }}
                imagePlaceholder="/assets/notemate.webp"
              />
              <ProjectCard 
                title="Medico-Legal System" 
                description="Medico-Legal Autopsy System with secure RBAC for District Hospital Matara." 
                tags={["Security", "Next.js", "MySQL", "RBAC", "Docker"]}
                details={{
                  problem: "Needed a secure and efficient way to manage autopsy forms and user access at the hospital.",
                  solution: "Developed a secure RBAC system that integrates with hospital workflows.",
                  outcomes: [
                    "Improved administrative efficiency.",
                    "Ensured security and compliance.",
                    "Enhanced user access controls."
                  ]
                }}
                imagePlaceholder="/assets/medico2.webp"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ProjectCard 
                title="SeaThrough" 
                description="A full-stack MERN-based tour booking platform with a responsive UI." 
                tags={["MERN", "Material-UI", "React", "Node.js"]}
                details={{
                  problem: "Tourists needed an easy-to-use platform for booking tours.",
                  solution: "Developed a full-stack MERN application with secure APIs.",
                  outcomes: [
                    "Provided a user-friendly platform with secure authentication.",
                    "Implemented a fully responsive design.",
                    "Enabled secure API interactions."
                  ]
                }}
                imagePlaceholder="/assets/seaT.webp"
              />
              <ProjectCard 
                title="Accommodate" 
                description="Online Hostel Finding System with area-based search and advanced filtering." 
                tags={["HTML", "PHP", "MySQL", "JavaScript"]}
                details={{
                  problem: "There was no streamlined platform for finding hostels with comprehensive filters.",
                  solution: "Built a web app connecting students to available hostels.",
                  outcomes: [
                    "Simplified the process of finding accommodations.",
                    "Enabled hostel owners to manage listings.",
                    "Enhanced user experience with an interactive dashboard."
                  ]
                }}
                imagePlaceholder="/assets/acc.webp"
              />
            </div>

            {/* Research Section - Mobile Adjusted */}
            <div className="border-t border-black/10 pt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                <div className="relative">
                  <div className="absolute -top-12 -left-6 text-5xl md:text-6xl text-black/20 select-none font-serif">∫</div>
                  <p className="text-xl md:text-3xl font-serif max-w-2xl leading-snug">
                    "Cloud-Resilient{" "}<Highlight delay={0.2}>NDVI Estimation</Highlight> for Smallholder Paddy Fields from Single-Date Sentinel-1 SAR Using an {" "}<Highlight delay={0.4}>Enhanced U-Net++</Highlight>" 
                    <span className="block text-base md:text-lg mt-4 font-sans italic text-gray-500">— <span className='text-emerald-500/80'>ICARC 2026</span> (in proceeding)</span>
                  </p>
                </div>
                <div className="w-full md:w-auto text-center bg-black text-white px-6 py-3 md:py-2 text-[10px] md:text-xs uppercase tracking-tighter hover:bg-emerald-500 transition-colors cursor-pointer">
                    IEEE&nbsp;Xplore
                </div>
            </div>
          </div>
        </Chapter>

        {/* CHAPTER 04: ARSENAL */}
        <Chapter number="04" title="Arsenal">
          <SkillCloud />
        </Chapter>

        <footer className="py-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-[10px] md:text-xs tracking-[0.3em] uppercase font-mono text-center md:text-left">
            Sanuth Kalhan Wanniarachchi // © 2026
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest font-bold">
              <a href="https://linkedin.com/in/sanuth-kalhan-wanniarachchi-96a90a285" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
              <a href="https://github.com/SanuthKalhan" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">GitHub</a>
              <a href="https://huggingface.co/SanuthK" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">HuggingFace</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
