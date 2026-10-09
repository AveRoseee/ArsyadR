export interface Project {
  imgSrc: string;
  title: string;
  description: string;
  githubURL: string;
  demoURL: string;
}

export const projects: Project[] = [
  {
    title: "HTML Bootstrap Portfolio",
    description:
      "A responsive personal portfolio website built with HTML, CSS, and Bootstrap. It presents my projects and skills in a clean, modern layout with smooth animations and a contact form.",
    imgSrc: "Portfolio.png",
    githubURL: "https://github.com/InsoniacX/ArsyadR",
    demoURL: "https://insoniacx.github.io/ArsyadR/",
  },
  {
    title: "Her Fallacy",
    description:
      "A 2D puzzle platformer built with Unity and C# for the GameSEED 2025 game jam, and my first video game project. You play as a girl trapped in a surreal world and must solve puzzles and overcome obstacles to escape. The game features hand-drawn art and a haunting soundtrack.",
    imgSrc: "/Her-Fallacy.png",
    githubURL: "https://github.com/InsoniacX/GameSEED_2025",
    demoURL: "https://vulcanova-team.itch.io/her-fallacy",
  },
  {
    title: "G-Project",
    description:
      "A company profile website that showcases a company's services and products. Built with HTML, CSS, and vanilla JavaScript, with a clean, modern design, smooth animations, and a responsive layout.",
    imgSrc: "/G-Project.png",
    githubURL: "https://github.com/InsoniacX/itw2023_project2_233040075",
    demoURL: "https://insoniacx.github.io/itw2023_project2_233040075/",
  },
  {
    title: "Samafitro",
    description:
      "A Laravel website for a local business, with a colorful, vibrant design, a product catalog, and an online ordering system.",
    imgSrc: "/Samafitro.png",
    githubURL: "https://github.com/Daffarob/ProjectWebKP",
    demoURL: "",
  },
  {
    title: "To-Do App",
    description:
      "A full-stack to-do list application built with React and Go, where users can add, edit, and delete tasks through a minimalist interface. Deployed on Railway.",
    imgSrc: "/Todo-App.png",
    githubURL: "https://github.com/InsoniacX/todo-app-go-react",
    demoURL: "https://todo-app-go-react-production.up.railway.app/",
  },
  {
    title: "MIKCONF",
    description:
      "A Laravel web app for configuring MikroTik devices, currently in development. It provides a web interface for setting up network devices.",
    imgSrc: "/MIKCONF.png",
    githubURL: "https://github.com/InsoniacX/mikrotik-configuration-web",
    demoURL: "",
  },
  {
    title: "MetroSnack Financial App",
    description:
      "A multi-branch financial management system built for a retail business, covering invoicing, daily income and expense tracking, and debt monitoring across store locations. Built with Flet, FastAPI, and PostgreSQL in a secure three-tier architecture, with JWT authentication, branch-level access control, multi-level PDF export, and a real-time debt dashboard. Deployed on a VPS behind Nginx with HTTPS.",
    imgSrc: "/MetroSnack.png",
    githubURL: "",
    demoURL: "",
  },
];
