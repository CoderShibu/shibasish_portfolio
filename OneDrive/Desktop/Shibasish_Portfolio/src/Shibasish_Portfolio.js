// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import mlsaLogo from './assets/company_logo/mlsa.jpeg';

// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';
// import kvLogo from './assets/education_logo/kv.jpeg';

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'React JS', logo: reactjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Django' },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: mlsaLogo,
    role: "Social Media Volunteer",
    company: "Microsoft Learn Student Ambassador",
    date: "October 2024 - present",
    desc: "Contributed as a Social Media Volunteer under the Microsoft Learn Student Ambassadors program at CIT, managing content strategies and digital engagement. Collaborated with cross-functional teams to design engaging visuals, streamline event promotions, and maintain a consistent brand presence across platforms—enhancing community interaction and visibility.",
    skills: ["Content Strategy", "Digital Engagement", "Branding", "Team Collaboration"]
  },
  {
    id: 1,
    img: webverseLogo,
    role: "Technical Team Member",
    company: "Innov8 Club at CIT",
    date: "present",
    desc: "Served as a Technical Team Member at Innov8 Club, CIT, contributing to the development of tech-driven solutions and internal projects. Collaborated with peers to build web features, integrate APIs, and maintain code quality across projects. Played a key role in implementing UI components and back-end logic, supporting the club’s innovation-driven initiatives.\nSkills: Full-Stack Development, MERN Stack, API Integration, Git & GitHub, UI/UX Implementation, Problem Solving, Team Collaboration, Project Deployment",
    skills: ["MERN Stack", "RESTful APIs", "UI/UX", "Agile"]
  },
];
  
  export const education = [
    {
      id: 0,
      school: "Kendriya Vidyalaya",
      date: "2011-2023",
      desc: "Completed higher secondary education with a focus on Computer Science, Mathematics, and Physics. Developed strong analytical thinking, logical reasoning, and problem-solving skills. Built early foundations in programming, algorithms, and academic discipline through a nationally standardized curriculum.",
      degree: "Senior Secondary – Computer Science (CBSE)",
    },
    {
      id: 1,
      img: "https://drive.google.com/uc?export=view&id=1yJP1WOG2uiqvfeyH7PHA5NFgwnE53Z5H",
      school: "Cambridge Institute of Technology, Bengaluru",
      date: "Expected Completion: 2027",
      desc: "Gaining in-depth knowledge in software development, database systems, computer networks, and data structures. Curriculum includes full stack development, operating systems, cybersecurity fundamentals, and emerging technologies like AI/ML. Engaged in hands-on projects, hackathons, and coding communities to apply classroom learning in real-world scenarios.",
      degree: "Bachelor of Engineering – Information Science and Engineering",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GeBill",
      description:
        "A powerful and responsive web-based billing system designed to simplify invoice creation and transaction tracking. Users can generate digital bills instantly with a clean interface optimized for usability and efficiency. Ideal for small businesses and service providers managing routine billing.",
      tags: ["HTML", "CSS", "JavaScript", "Next.js"],
      webapp: "https://50xyndark.vercel.app/",
    },
    {
      id: 1,
      title: "GeBill (Backup Version)",
      description:
        "A fully synchronized backup deployment of the GeBill platform, ensuring uninterrupted access and fault tolerance in the event of primary system downtime. Maintains all core functionalities with identical UI/UX design for reliability and consistency.",
      tags: ["HTML", "CSS", "JavaScript", "Next.js"],
      webapp: "https://50xyndarkbackup.vercel.app/",
    },
    {
      id: 2,
      title: "Gaming Insaan",
      description:
        "A visually engaging, gaming-themed website crafted to highlight media content, video edits, and creator portfolios. Designed with immersive UI elements and smooth animations, it serves as a portfolio showcase for gaming creators and editors.",
      tags: ["HTML", "CSS", "JavaScript", "Next.js"],
      webapp: "https://gaminginsaan.vercel.app/",
    },
    {
      id: 3,
      title: "WeatherIndia",
      description:
        "A playful and interactive website mimicking a weather forecast tool, designed to prank users with humorous content under the guise of real-time weather data. Features a clean layout and smooth transitions that enhance the overall experience.",
      tags: ["HTML", "CSS", "JavaScript", "Next.js"],
      webapp: "https://wetherindia.vercel.app/",
    },
  ];
