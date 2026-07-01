import React from "react";

const STACK = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Query",
      "Tailwind",
      "SASS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Ruby on Rails",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    label: "AI / LLM",
    items: [
      "OpenAI",
      "Claude (Anthropic)",
      "LangChain",
      "Vercel AI SDK",
      "Cursor",
      "v0",
      "RAG",
      "Pinecone",
      "Whisper",
    ],
  },
  {
    label: "No-Code / Low-Code",
    items: [
      "Bubble",
      "Xano",
      "Webflow",
      "WeWeb",
      "FlutterFlow",
      "Zapier",
      "Make",
      "n8n",
      "Airtable",
    ],
  },
  {
    label: "Cloud / Tooling",
    items: ["AWS", "Vercel", "Netlify", "Docker", "Git", "CI/CD"],
  },
];

export default function TechStack() {
  return (
    <div className="tech-stack" data-aos="fade-left">
      {STACK.map((group) => (
        <div className="tech-group" key={group.label}>
          <h5 className="tech-group__label">{group.label}</h5>
          <div className="tech-group__chips">
            {group.items.map((item) => (
              <span className="tech-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
