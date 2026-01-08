"use client";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { getPointsFromImage } from "./Sampler";
import Particles from "./Particles";

export default function Scene({ activeSection }: { activeSection: string }) {
  const [targets, setTargets] = useState<any>(null);

  useEffect(() => {
    async function loadTargets() {
      const hero = await getPointsFromImage("/assets/sanuth-portrait.png", 20000);
      const about = await getPointsFromImage("symbols/brain-icon.png", 20000);
      const experience = await getPointsFromImage("symbols/bank.png", 20000);
      const projects = await getPointsFromImage("symbols/ai-node.png", 20000);

      setTargets({
        HERO: hero,
        ABOUT: about,
        EXPERIENCE: experience,
        PROJECTS: projects,
      });
    }
    loadTargets();
  }, []);

  if (!targets) return <div className="w-full h-full bg-[#fdfdfd]" />;

  return (
    <div className="w-full h-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 45 }} // Pulled back to fit wider 16-unit shapes
        dpr={[1, 2]}
      >
        <color attach="background" args={["#fdfdfd"]} />
        <ambientLight intensity={1.5} />
        <Particles activeSection={activeSection} targets={targets} />
      </Canvas>
    </div>
  );
}