import React from "react";

// Percentage-based skills, laid out in a compact 2-column grid.
const SKILLS = [
  { name: "React", value: 95 },
  { name: "Node.js", value: 88 },
  { name: "Next.js", value: 90 },
  { name: "Express", value: 82 },
  { name: "TypeScript", value: 85 },
  { name: "GraphQL", value: 78 },
  { name: "JavaScript", value: 92 },
  { name: "Ruby on Rails", value: 65 },
  { name: "Redux", value: 82 },
  { name: "MongoDB", value: 80 },
  { name: "React Query", value: 85 },
  { name: "Firebase", value: 78 },
  { name: "AI / LLM", value: 85 },
  { name: "AWS", value: 72 },
  { name: "No-Code", value: 88 },
  { name: "SASS", value: 85 },
];

export default function Skills() {
  return (
    <div className="skills" data-aos="fade-left">
      {SKILLS.map((s) => (
        <div className="skill" key={s.name} style={{ "--val": `${s.value}%` }}>
          <div className="skill__head">
            <span className="skill__name">{s.name}</span>
            <span className="skill__pct">{s.value}%</span>
          </div>
          <div className="skill__track">
            <div className="skill__fill" />
          </div>
        </div>
      ))}
    </div>
  );
}
