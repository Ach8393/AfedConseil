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
  { text: "Accompagnement", imgPath: "images/ideas.svg" },
  { text: "Apprentissage", imgPath: "images/concepts.svg" },
  { text: "Formation", imgPath: "images/designs.svg" },
  { text: "Formule Adaptés", imgPath: "images/ideas.svg" },
  { text: "Etude", imgPath: "images/concepts.svg" },
  { text: "Efficacité", imgPath: "images/designs.svg" },
   { text: "Developpement", imgPath: "images/ideas.svg" },
    { text: "Durabilité", imgPath: "images/ideas.svg" },
  
];

const logoImgs = [
  { imgPath: "images/afedC.jpg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Années d’expérience" },
  { value: 200, suffix: "+", label: "Clients satisfaits" },
  { value: 108, suffix: "+", label: "Projets réalisés" },
  { value: 90, suffix: "%", label: "Taux de fidélisation des clients" },
];

const logoIconsList = [
  {
    imgPath: "images/logos/company-logo-1.png",
  },
  {
    imgPath: "images/logos/company-logo-2.png",
  },
  {
    imgPath: "images/logos/company-logo-3.png",
  },
  {
    imgPath: "images/logos/company-logo-4.png",
  },
  {
    imgPath: "images/logos/company-logo-5.png",
  },
  {
    imgPath: "images/logos/company-logo-6.png",
  },
  {
    imgPath: "images/logos/company-logo-7.png",
  },
  {
    imgPath: "images/logos/company-logo-8.png",
  },
  {
    imgPath: "images/logos/company-logo-9.png",
  },
  {
    imgPath: "images/logos/company-logo-10.png",
  },
  {
    imgPath: "images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "images/seo.png",
    title: "Focus sur la qualité",
    desc: "Fournir des résultats de haute qualité tout en accordant une attention particulière à chaque détail.",
  },
  {
    imgPath: "images/chat.png",
    title: "Communication fiable",
    desc: "Vous tenir informé à chaque étape afin de garantir transparence et clarté.",
  },
  {
    imgPath: "images/time.png",
    title: "Livraison dans les délais",
    desc: "Veiller à ce que les projets soient réalisés dans les délais, avec qualité et souci du détail.",
  },
];

const techStackImgs = [
  {
    name: "Formation",
    imgPath: "images/logos/formation.png",
  },
  {
    name: "Animation",
    imgPath: "images/logos/python.svg",
  },
  {
    name: "Marketing",
    imgPath: "images/logos/node.png",
  },
  {
    name: "Conseil",
    imgPath: "images/logos/three.png",
  },
  {
    name: "Gestion de Projet",
    imgPath: "images/logos/git.svg",
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
/* articles should be fetched from db */


const expLogos = [
  {
    name: "logo1",
    imgPath: "images/logo1.png",
  },
  {
    imgPath: "AfedConseil/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "images/logo3.png",
  },
];
/* reviews should be fetched from db */


const socialImgs = [
  {
    name: "insta",
    imgPath: "images/insta.png",
    url: "https://www.instagram.com/AFEDCONSEIL",
  },
  {
    name: "fb",
    imgPath: "images/fb.png",
    url: "https://www.facebook.com/AFEDCONSEIL",
  },
  {
    name: "x",
    imgPath: "images/x.png",
    url: "https://twitter.com/AFEDCONSEIL",
  },
  {
    name: "linkedin",
    imgPath: "images/linkedin.png",
    url: "https://www.linkedin.com/in/AFEDCONSEIL",
  },
];

export {
  words,
  abilities,
  logoImgs,
  logoIconsList,
  counterItems,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
