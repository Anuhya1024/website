

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  dockerIcon,
  kubernetesIcon,
  neoIcon,
  figmaIcon,
  communitySensing,
  trip,
  hrms,
  avatar,
  fireeye,
  infy,
  iith,
  crowdDoing,
  techinfo,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  dockerIcon,
  kubernetesIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there!, I'm thrilled to have you here, ready to embark on a journey of discovery :-)",

    "Allow me to introduce myself - I am Anuhya, a passionate individual driven by curiosity and a relentless pursuit of excellence.",

    "Outside of my regular activities, I'm into drawing whenever I have some free time. I'm also a huge golden retriever lover but doesn't own a dog yet and I enjoy playing badminton for fun.",

    "I invite you to delve into the various sections of my website. Thank you for visiting, and I look forward to embarking on this extraordinary exploration together.",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const work = [
  {
    name: "Software Engineer",
    description: 'Developed and maintained full-stack web applications using Java, React, AWS and Spring Boot. Developed reusable and modular React components using functional components, hooks, and class components, adhering to best practices and design patterns. Utilized Spring Boot to develop scalable backend services and integrate with databases. Designed and optimized database schemas, SQL queries, and implemented data access layers using Hibernate. Used design patterns Adapter, Singleton, Strategy, Abstract Factory, MVC, DAO, and Facade. Employed containerization, deployment strategies using Docker, Kubernetes for scalable and efficient deployments.',
    image: techinfo,
  },
  {
    name: "Software Engineer",
    description: 'Developed a cross-platform mobile application from scratch using React Native and MongoDB that allows users to track their time spent in nature and prioritize their well-being. Utilized React hooks such as useState, useEffect, useContext. Created custom React hooks to encapsulate complex logic, promoting code reuse and composability across React components and applications. Employed React Suspense and lazy loading techniques to defer component rendering and loading of resources, improving initial page load times. Utilized Git, Jira, agile methodologies to facilitate cross-functional collaboration Implemented state management solutions such as Redux, MobX, or Context API to manage application state and data flow efficiently across components. Axios for handling API requests, and React Navigation for app navigation. Developed and maintained RESTful APIs using Spring Boot. Developed entity classes, mappings using Hibernate. Used Maven for automatically loading all the dependencies and Jenkins to build and maintain the code for testing. Employed AWS CloudWatch for monitoring and logging performance, Integrated AWS services such as S3.',
    image: crowdDoing,
  },
  {
    name: "Software Engineer Intern",
    description: 'Leveraged React and Python technologies to design, develop and implement 20+ custom dashboard items for the DRAY platform, allowing for real-time monitoring of client engagement metrics. Analyzed engagement data to provide insights into lifecycle, timeline, and status of client interactions. Utilized plugin framework to create reusable plugins, resulting in 50% increase in operational efficiency, reduced development time. Resulted in 20% improvement in engagement tracking and 30% reduction in time required for engagement analysis.',
    image: fireeye,
  },
  {
    name: 'Software Engineer',
    description: 'Developed a customized workflow for printer management. Created service catalogs and automated tasks such as printer setup, maintenance, and troubleshooting. Generated work orders, and notified stakeholders. Automated 1000+ comprehensive test cases and step configs utilizing ServiceNow, and JavaScript ensuring seamless regression & server-side functionality testing for Incident, Change, Problem, SR, and AM modules. Performed thorough analysis and enhancement of client scripts, UI Policies, and UI Actions on the ServiceNow plat- form and identified over 100+ vulnerabilities, resulting in increased platform stability and security.',
    image: infy,
    
  },
  {
    name: 'Software Engineer Intern',
    description: 'E-Learning SaaS : Utilized Node.js, MongoDB, Pug, Jade, and JS and Spearheaded the process, to develop an experience to enroll courses aligned their interests and improved user engagement by 40%. Elevated website\'s security by deploying on A2hosting server and installing SSL certificate, resulted in 25% reduction in workload.',
    image: iith,
  },
];

const projects = [
  {
    name: "HRMS",
    description: 'HRMS a tool which can automate the tasks that HR does daily. HR Management System that will serve the needs of HR administrators, employees, hiring managers, and executives. The goal of the project is to provide a comprehensive system that will streamline HR-related tasks and improve overall efficiency in managing employee data, benefits, attendance, time off, hiring.',
    image: hrms,
    source_code_link: 'https://github.com/Anuhya1024/HRMS',
    // demo_link: '',
  },
  {
    name: 'Community Sensing',
    description: 'An app to gauge students\' sense of belonging in community. Daily notifications were implemented using push notification services to collect data. Analyzed data, and identified ideal number of questions users were most willing to answer, resulting in 75% response rate. ',
    image: communitySensing,
    source_code_link: 'https://github.com/Anuhya1024/Community-Sensing',
    //demo_link: '',
  },
  {
    name: 'Trip Planner',
    description: 'a responsive website site that pulls data from a third party API, https://OpenWeatherMap.com and https://Foursquare.com, to present search results in a useful way. Trip Planner gives users the ability to find weather results and venues in a specific location.',
    image: trip,
    source_code_link: 'https://github.com/cu-csci-4253-datacenter-fall-2021/final-project-Anuhya1024/tree/main',
    //demo_link: '',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  // {
  //   id: 'vite',
  //   title: 'Vite',
  //   icon: viteIcon,
  //   description:
  //     'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  // },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 4 years of Python experience, I am adept at coding in Python.',
  },
  {
    id: 'node',
    title: 'Node.js',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  // {
  //   id: 'neo',
  //   title: 'Neo4j',
  //   icon: neoIcon,
  //   description:
  //     'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  // },
  // {
  //   id: 'raspi',
  //   title: 'Raspberry Pi',
  //   icon: raspIcon,
  //   description:
  //     'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  // },
  // {
  //   id: 'eslint',
  //   title: 'Eslint',
  //   icon: eslintIcon,
  //   description:
  //     'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  // },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  work,
  memoji,
  skills,
  markerSvg,
  icons,
};
