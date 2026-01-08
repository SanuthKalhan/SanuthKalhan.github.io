"use client";
import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["Python", "C#", "Java", "TypeScript", "SQL"] },
  { category: "AI/ML", items: ["PyTorch", "TensorFlow", "U-Net++", "OpenCV", "NLP"] },
  { category: "Frameworks", items: [".NET Core", "Angular", "Spring Boot", "React", "Next.js"] },
  { category: "Infrastructure", items: ["Azure DevOps", "Docker", "AWS", "Kubernetes", "Firebase"] }
];

export default function SkillCloud() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {skills.map((skill, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 mb-6">{skill.category}</h4>
          <ul className="space-y-3">
            {skill.items.map((item, j) => (
              <li key={j} className="text-2xl font-light hover:translate-x-2 transition-transform duration-300 cursor-default">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}