// Local screenshot galleries for the earlier hand-built projects.
import travelguideHero from "../../assets/travelguide.jfif";
import travelguide3 from "../../assets/travelguide/Capture-1.PNG";
import travelguide4 from "../../assets/travelguide/Capture-2.PNG";
import travelguide5 from "../../assets/travelguide/Capture-3.PNG";
import travelguide6 from "../../assets/travelguide/Capture-4.PNG";
import travelguide7 from "../../assets/travelguide/Capture-5.PNG";
import ntt1 from "../../assets/ntt1.jpeg";
import ntt2 from "../../assets/ntt/ntt-2.png";
import ntt3 from "../../assets/ntt/ntt-3.png";
import ntt4 from "../../assets/ntt/ntt-4.png";
import ntt5 from "../../assets/ntt/ntt-5.png";
import quiz2 from "../../assets/quiz/quiz-2.png";
import quiz3 from "../../assets/quiz/quiz-3.png";
import quiz4 from "../../assets/quiz/quiz-4.png";
import quiz5 from "../../assets/quiz/quiz-5.png";
import soulz2 from "../../assets/soulz/soulz-2.png";
import soulz3 from "../../assets/soulz/soulz-3.png";
import soulz4 from "../../assets/soulz/soulz-4.png";
import soulz5 from "../../assets/soulz/soulz-5.png";
import warbls2 from "../../assets/warbls/warbls-2.png";
import warbls3 from "../../assets/warbls/warbls-3.png";
import warbls4 from "../../assets/warbls/warbls-4.png";
import portfolioHero from "../../assets/portfolio.jpg";
import portfolio3 from "../../assets/portfolio/Capture-1.PNG";
import portfolio4 from "../../assets/portfolio/Capture-2.PNG";
import portfolio5 from "../../assets/portfolio/Capture-3.PNG";
import checkmate1 from "../../assets/itsacheckmate/checkmate-1.png";
import checkmate2 from "../../assets/itsacheckmate/checkmate-2.png";
import checkmate3 from "../../assets/itsacheckmate/checkmate-3.png";

// Filter categories (order controls the chip order in the UI).
export const CATEGORIES = [
  "All",
  "Product / SaaS",
  "Full Stack",
  "Frontend",
  "No-Code",
];

/**
 * Project shape:
 *   name, image (hero), gallery? (screenshots for the modal carousel),
 *   tags (display), groups (filter buckets from CATEGORIES),
 *   description, deployed, github, role, date
 */
export const data = [
  {
    name: "HungerRush",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    tags: ["React", "Node", "SaaS"],
    groups: ["Product / SaaS", "Full Stack"],
    deployed: "https://www.hungerrush.com/",
    github: "",
    role: "Full Stack",
    date: "2023 – 2024",
    description:
      "All-in-one restaurant POS with online ordering, loyalty, and AI phone ordering — built for operators who need speed, reliability, and growth at scale.",
  },
  {
    name: "Andrometa",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80",
    tags: ["React", "Web3", "Gaming"],
    groups: ["Product / SaaS", "Full Stack"],
    deployed: "https://www.andrometa.gg/",
    github: "",
    role: "Full Stack",
    date: "2024",
    description:
      "Agentic intelligence, gaming, and creation — flagship titles like SWRMS, partner worlds, YapWorld companions, and AniMee streaming in one connected universe.",
  },
  {
    name: "It's a Checkmate",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",
    gallery: [checkmate1, checkmate2, checkmate3],
    tags: ["Ruby on Rails", "React", "CircleCI"],
    groups: ["Product / SaaS", "Full Stack"],
    deployed: "https://www.itsacheckmate.com/",
    github: "",
    role: "Full Stack",
    date: "Aug 2022 – Mar 2024",
    description:
      "Enterprise ordering stack: digital menu boards, voice AI, web & app ordering, catering, and third-party integrations with analytics and 24/7 support — control all online orders & menus directly from your POS.",
  },
  {
    name: "AdTeam",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    tags: ["Next.js", "AI", "No-Code"],
    groups: ["Product / SaaS", "No-Code"],
    deployed: "https://adteam.ai/",
    github: "",
    role: "Full Stack",
    date: "2024 – 2025",
    description:
      "An autonomous ad-creation copilot that unifies scripting, creative production, and launch workflows in one AI-assisted platform.",
  },
  {
    name: "NTT Experience",
    image: ntt1,
    gallery: [ntt2, ntt3, ntt4, ntt5],
    tags: ["React", "Globkit", "Mapbox"],
    groups: ["Frontend"],
    deployed: "https://ntt-experience.netlify.app/",
    github: "https://github.com/aliahmad11403/Ntt-experience",
    role: "Frontend",
    date: "November 2021",
    description:
      "A realtime data-center map experience built with Globkit and the Mapbox platform, visualising global infrastructure interactively.",
  },
  {
    name: "Mailead",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
    tags: ["React", "Node", "Automation"],
    groups: ["Product / SaaS", "Full Stack"],
    deployed: "https://mailead.io/",
    github: "",
    role: "Full Stack",
    date: "2024",
    description:
      "Cold-email platform for agencies with unlimited accounts, inbox rotation, warmup, AI replies, 200+ integrations, forms, and analytics in one place.",
  },
  {
    name: "Freshprep",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
    tags: ["Node", "React", "Payments"],
    groups: ["Product / SaaS", "Full Stack"],
    deployed: "https://www.freshprep.ca/",
    github: "",
    role: "Full Stack",
    date: "2023",
    description:
      "Canada's #1 meal-kit platform. Re-architected the core ordering and fulfilment engine to handle 20,000+ active subscribers and $4M/month at 99.9% uptime.",
  },
  {
    name: "Lazy Leadz",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    tags: ["Bubble", "Xano", "OpenAI"],
    groups: ["No-Code", "Product / SaaS"],
    deployed: "https://lazyleadz.com",
    github: "",
    role: "No-Code Developer",
    date: "2024",
    description:
      "An AI-powered lead-generation platform that identifies and engages potential customers through personalised outreach — built no-code with Bubble, Xano, and OpenAI.",
  },
  {
    name: "Order AI",
    image:
      "https://images.unsplash.com/photo-1509315703195-529879416a7d?w=900&q=80",
    gallery: [quiz2, quiz3, quiz4, quiz5],
    tags: ["React", "SASS", "Node"],
    groups: ["Full Stack"],
    deployed: "https://order-ai-quiz.netlify.app/",
    github: "https://github.com/ibadahmad12/Order-ai-quiz",
    role: "Full Stack",
    date: "February 2022",
    description:
      "Interactive quiz/onboarding flow backed by a Node service, with data persisted to MongoDB. Pure SCSS UI with carousel-driven steps.",
  },
  {
    name: "Warbls",
    image: "https://cdn-images-1.medium.com/max/1600/0*uWq2EZFrUEX0qUhZ",
    gallery: [warbls2, warbls3, warbls4],
    tags: ["React", "Node", "Redux"],
    groups: ["Full Stack"],
    deployed: "https://warbls.com/",
    github: "https://github.com/faheemsajjad65/warbls",
    role: "Full Stack",
    date: "October 2021",
    description:
      "Social publishing app with real-time features, Redux state management, and a Node/MongoDB backend powering feeds and interactions.",
  },
  {
    name: "Travel Guide",
    image: travelguideHero,
    gallery: [travelguide3, travelguide4, travelguide5, travelguide6, travelguide7],
    tags: ["React", "GraphQL", "Apollo"],
    groups: ["Full Stack"],
    deployed: "https://brando-travelguide.netlify.app/",
    github: "https://github.com/IbadAhmad80/Brando-TravelGuide",
    role: "Full Stack",
    date: "August 2021",
    description:
      "Travel-guiding web app with blogs, tour packages, and offers. Data on MongoDB, GraphQL APIs with an Apollo client, and GraphQL subscriptions for real-time comments.",
  },
  {
    name: "Soulz",
    image:
      "https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?w=900&q=80",
    gallery: [soulz2, soulz3, soulz4, soulz5],
    tags: ["React", "SASS"],
    groups: ["Frontend"],
    deployed: "https://soulz.netlify.app/",
    github: "https://github.com/ibadahmad12/Soulz",
    role: "Frontend",
    date: "April 2021",
    description:
      "A polished marketing/landing experience built with React and pure SCSS, focused on smooth motion and responsive layout.",
  },
  {
    name: "Portfolio",
    image: portfolioHero,
    gallery: [portfolio3, portfolio4, portfolio5],
    tags: ["React", "SASS", "Vite"],
    groups: ["Frontend"],
    deployed: "https://findibad.netlify.app/",
    github: "https://github.com/IbadAhmad80/Portfolio",
    role: "Frontend",
    date: "2021 – 2026",
    description:
      "This very site — a personal portfolio showcasing projects and open-source work. Recently migrated to Vite with an upgraded hero, particle background, and consistent design system.",
  },
];
