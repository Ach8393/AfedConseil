const navLinks = [
  {
    name: "Nos Projets",
    link: "#work",
  },
  {
    name: "Experiences",
    link: "#experience",
  },
  {
    name: "Compétences",
    link: "#skills",
  },
  {
    name: "Avis",
    link: "#testimonials",
  },
];

const words = [
  { text: "Accompagnement", imgPath: "AfedConseil/images/ideas.svg" },
  { text: "Apprentissage", imgPath: "AfedConseil/images/concepts.svg" },
  { text: "Formation", imgPath: "AfedConseil/images/designs.svg" },
  { text: "Formule Adaptés", imgPath: "AfedConseil/images/ideas.svg" },
  { text: "Etude", imgPath: "AfedConseil/images/concepts.svg" },
  { text: "Efficacité", imgPath: "AfedConseil/images/designs.svg" },
   { text: "Developpement", imgPath: "AfedConseil/images/ideas.svg" },
    { text: "Durabilité", imgPath: "AfedConseil/images/ideas.svg" },
  
];

const logoImgs = [
  { imgPath: "AfedConseil/images/afedC.jpg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Années d’expérience" },
  { value: 200, suffix: "+", label: "Clients satisfaits" },
  { value: 108, suffix: "+", label: "Projets réalisés" },
  { value: 90, suffix: "%", label: "Taux de fidélisation des clients" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Focus sur la qualité",
    desc: "Fournir des résultats de haute qualité tout en accordant une attention particulière à chaque détail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Communication fiable",
    desc: "Vous tenir informé à chaque étape afin de garantir transparence et clarté.",
  },
  {
    imgPath: "/images/time.png",
    title: "Livraison dans les délais",
    desc: "Veiller à ce que les projets soient réalisés dans les délais, avec qualité et souci du détail.",
  },
];

const techStackImgs = [
  {
    name: "Formation",
    imgPath: "AfedConseil/images/logos/formation.png",
  },
  {
    name: "Animation",
    imgPath: "AfedConseil/images/logos/python.svg",
  },
  {
    name: "Marketing",
    imgPath: "AfedConseil/images/logos/node.png",
  },
  {
    name: "Conseil",
    imgPath: "AfedConseil/images/logos/three.png",
  },
  {
    name: "Gestion de Projet",
    imgPath: "AfedConseil/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Formation",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Animation",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Marketing",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Conseil",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Gestion de Projet",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Porté par Act4Community Khouribga | Piloté par AFED Conseil dans le cadre de notre mission de former une nouvelle génération d’éducateurs sportifs compétents, engagés et pédagogues.",
    imgPath: /images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Qualification des Entraîneurs d’Éducation Physique et Sportive ",
    date: "Juillet 2025 ",
    responsibilities: [
      "AFED Conseil et Act4Community Khouribga réaffirment leur engagement pour un sport éducatif de qualité,",
      "moteur d’épanouissement personnel et de performance durable.",
    ],
  },
  {
    review: "la 2e session de formation en planification stratégique – Vers une feuille de route structurée et durable pour l’Association Chouala",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Planification strategique",
    date: "Juin 2025",
    responsibilities: [
      "Construire un plan d’action opérationnel, structuré autour d’activités claires, de responsabilités identifiées et d’indicateurs mesurables",
      "Élaborer une matrice de gestion des risques et intégrer des mécanismes de durabilité",
      "Développer un cadre budgétaire prévisionnel cohérent et réaliste",
      "Mettre en place un dispositif de suivi-évaluation assurant l’efficacité, la transparence et l’amélioration continue",
    ],
  },
  {
    review: "la compétition des idées de projets – SPARK LAB",
    imgPath: "AfedConseil/images/exp3.png",
    logoPath: "AfedConseil/images/logo3.png",
    title: "SPARK LAB",
    date: "May 2025",
    responsibilities: [
      "Les formations, organisées les 30 décembre 2024 et 18 janvier 2025, ont abordé les sujets suivants :",
      "La gestion financière des associations",
      "La gestion administrative des associations",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoImgs,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
