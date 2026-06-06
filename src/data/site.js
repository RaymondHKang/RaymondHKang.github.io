export const site = {
  name: "Raymond Kang",
  title: "Raymond Kang — Software Engineer & CS Graduate Student",
  description:
    "Portfolio of Raymond Kang — M.S. Computer Science student at UC Davis with full-stack, ML, and computer vision experience.",
  url: "https://raymondhkang.github.io",
  email: "raymond.h.kang@gmail.com",
  location: "San Ramon, CA, USA",
  tagline:
    "M.S. Computer Science student building full-stack tools and ML systems that ship to real users.",
  bio: "I'm an M.S. Computer Science student at UC Davis (GPA 3.77) with hands-on experience as a full-stack developer at the California Department of Transportation, a research assistant in computational fabrication and ML, and a teaching assistant for computer vision and software development courses. I enjoy building reliable software, exploring interpretable AI, and turning complex technical work into tools people actually use.",
  languages: ["English", "Korean"],
  social: {
    github: "https://github.com/RaymondHKang",
    linkedin: "https://linkedin.com/in/raymond-kang-3262341aa",
  },
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of California, Davis",
    period: "Sep 2024 — Present",
    detail: "GPA: 3.77",
  },
  {
    degree: "B.S. Computer Science, Minor in Mathematics",
    school: "University of California, Davis",
    period: "Sep 2020 — Jun 2024",
    detail: null,
  },
];

export const certifications = [
  "Amazon Web Services Cloud Practitioner",
  "Oracle AI Vector Search Professional",
];

export const experience = [
  {
    title: "Teaching / Advising Assistant",
    organization: "University of California, Davis",
    location: "Davis, CA",
    period: "Sep 2024 — Present",
    highlights: [
      "Teaching Assistant for ECS 174 (Computer Vision) and ECS 36B (C++, OOP, Software Development)",
      "Developed automated grading scripts and curriculum for ECS 174 and ECS 36B",
      "Facilitated technical discussions for 100+ students",
    ],
  },
  {
    title: "SWE Intern / Part Time",
    organization: "California Department of Transportation — Department of Construction",
    location: "Sacramento, CA",
    period: "Mar 2023 — Feb 2026",
    highlights: [
      "Full-stack developer on an 8-person team, gathering user feedback and shipping features based on field needs",
      "Built and maintained 2 full-stack React/Flask/MySQL applications (also using PHP, HTML, CSS, JS, Python, Angular)",
      "Applications used by 1,500+ users, saving 50,000+ paper reports and thousands of labor hours",
    ],
  },
  {
    title: "Research Assistant",
    organization: "University of California, Davis — CompFab Lab / C²",
    location: "Davis, CA",
    period: "Fall 2022 — Present",
    highlights: [
      "Engineered C++ simulations using the Eigen library to model material folding for more accurate results",
      "Fine-tuned large foundational models for video classification tasks using state-of-the-art models",
      "Developed a Python ML pipeline (TensorFlow, Keras) with SVMs to classify fMRI neuroimaging data above random accuracy",
    ],
  },
];

export const projects = [
  {
    title: "Interpretable AI Toxicity Detector",
    period: "Winter 2025",
    description:
      "Developed an interpretable NSFW text moderation pipeline by fine-tuning RoBERTa and integrating RISE perturbation-based saliency with a post-hoc Concept Bottleneck Model.",
    tech: ["Python", "RoBERTa", "NLP", "Explainable AI"],
    liveUrl: null,
    repoUrl: "https://github.com/RaymondHKang",
    highlights: [
      "Achieved 87% validation accuracy with fine-tuned RoBERTa",
      "Provided human-readable rationales for toxicity detection",
    ],
  },
  {
    title: "Differential Testing of ML Libraries",
    period: "Winter 2025",
    description:
      "Engineered an automated testbed to profile CPU performance and verify numerical stability across PyTorch and TensorFlow.",
    tech: ["Python", "PyTorch", "TensorFlow", "Testing"],
    liveUrl: null,
    repoUrl: "https://github.com/RaymondHKang",
    highlights: [
      "Tested edge cases including NaN, Inf, and extreme tensor values",
      "Automated cross-library performance and stability profiling",
    ],
  },
  {
    title: "Predicting California Housing Prices",
    period: "Spring 2022",
    description:
      "Developed a California housing price predictor in a team of 5 using Scikit-Learn regression models and a Flask/JS web demo.",
    tech: ["Python", "Scikit-Learn", "Flask", "JavaScript"],
    liveUrl: null,
    repoUrl: "https://github.com/RaymondHKang",
    highlights: [
      "Built and evaluated regression models on California housing data",
      "Deployed an interactive Flask and JavaScript web demo",
    ],
  },
  {
    title: "AI / ML / CV Projects",
    period: "Spring 2022 & 2023",
    description:
      "Independent projects spanning pathfinding, game AI, deep reinforcement learning, computer vision, and cloud deployment.",
    tech: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
    liveUrl: null,
    repoUrl: "https://github.com/RaymondHKang",
    highlights: [
      "A* pathfinding to climb Mount Saint Helens; alpha-beta pruning mini-max for Connect Four",
      "Deep Q-learning (TensorFlow) Pong agent; RANSAC-based image stitching",
      "CIFAR image classification with PyTorch; OCI-deployed chatbot",
    ],
  },
  {
    title: "Operating Systems Projects",
    period: "Winter 2022",
    description:
      "Team projects implementing core operating systems concepts entirely in C.",
    tech: ["C", "Operating Systems", "Systems Programming"],
    liveUrl: null,
    repoUrl: "https://github.com/RaymondHKang",
    highlights: [
      "Integrated syscalls to emulate a shell",
      "Built a user-level threading API with preemption",
      "Implemented a FAT file system",
    ],
  },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "Python",
      "PHP",
      "HTML",
      "CSS",
      "x86-64",
      "RISC-V",
    ],
  },
  {
    category: "Technologies",
    skills: [
      "MySQL",
      "Git",
      "Linux",
      "Windows",
      "Bash",
      "Scripting",
      "Cursor",
      "Copilot",
    ],
  },
  {
    category: "Other",
    skills: [
      "Computer Architecture",
      "Networks",
      "Operating Systems",
      "Data Structures & Algorithms",
      "AI / ML",
      "Computer Vision",
    ],
  },
];
