import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import project1Img from '../images/projects/nexus.png';
import project2Img from '../images/projects/sphere.png';
import project3Img from '../images/projects/movosite.jpg';
import project4Img from '../images/projects/wesave.jpg';

const portfolioData = {
  header: {
    IntroProfile: {
      name: 'Muhammad Iqbal',
      role: 'Full-Stack Web Developer',
      excerpt: 'I build exceptional and accessible digital experiences for the web.'
    },
    navbar: [
      { name: 'about', url: "#about" },
      { name: 'experience', url: "#experience" },
      { name: 'projects', url: "#projects" }
    ],
    SocialMedia: [
      { name: 'Github', icon: <FaGithub className="socialMediaIcon"/>,url: "https://www.github.com/hellofromiqbal" },
      { name: 'Instagram', icon: <FaInstagram className="socialMediaIcon"/>,url: "https://www.instagram.com/hellofromiqbal" },
      { name: 'Twitter', icon: <FaTwitter className="socialMediaIcon"/>,url: "https://www.twitter.com/hellofromiqbal" },
      { name: 'LinkedIn', icon: <FaLinkedin className="socialMediaIcon"/>,url: "https://www.linkedin.com/in/hellofromiqbal" },
    ]
  },
  main: {
    aboutSection: {
      sectionTitle: 'about'
    },
    experienceSection: {
      sectionTitle: 'experience',
      experienceList: [
        {
          id: 1,
          period: '2022-2023',
          role: 'Front-End Web Developer',
          company: 'PT. Gikslab Talenta Internasional',
          desc: `Contribute to the development and maintenance of corporate web application features such as corporate talent work time tracking feature and task manager feature.`,
          technologies: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'JWT', 'React-Redux'],
          url: "https://www.gikslab.com"
        },
        {
          id: 2,
          period: '2021-2022',
          role: 'Front-End Web Developer',
          company: 'Cheedles Indonesia',
          desc: `Developed a company landing page integrated with Google Analytics 4, Meta pixel, Twitter pixel, and TikTok pixel to track, analyze, and predict the behavior of potential customers.`,
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Google Analytics 4', 'Google Tag Manager'],
          url: "https://www.order.cheedles.co.id"
        },
        {
          id: 3,
          period: '2020-2021',
          role: 'Customer Service',
          company: 'CIMB Niaga',
          desc: 'Addressed and resolved customer inquiries, concerns, and issues through various communication channels. Collaborated with internal teams to ensure timely issue resolution, contribute to maintaining high-quality service standards, and continually update their knowledge of products and policies.',
          url: "https://www.cimbniaga.com"
        }
      ]
    },
    projectsSection: {
      sectionTitle: 'projects',
      projectsList: [
        {
          id: 1,
          title: 'Nexus',
          desc: 'A social media application with several features such as creating a post, liking a post, making account profile changes and more.',
          technologies: [ 'Next.js', 'MongoDb', 'Tailwind', 'React-Redux', 'JWT', 'Bcrypt', '++'],
          url: "https://nexus-socialmedia.vercel.app/",
          img: project1Img,
        },
        {
          id: 2,
          title: 'Sphere',
          desc: 'A site that allows users to create and share articles, tips, and even their experiences publicly. This site is similar to medium.com.',
          technologies: [ 'MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'React-Redux', 'JWT', 'Bcrypt', '++' ],
          url: "https://sphere-client.vercel.app/",
          img: project2Img,
        },
        {
          id: 3,
          title: 'Movosite',
          desc: 'A website that provides information about millions of films and television programs as well as their cast and crew. The name is an acronym for Movie Site.',
          technologies: [ 'React.js', 'Tailwind'],
          url: "https://movosite.vercel.app/",
          img: project3Img,
        },
        {
          id: 4,
          title: 'WeSave',
          desc: 'An example landing page website for a cybersecurity company.',
          technologies: [ 'React.js', 'Tailwind'],
          url: "https://wesave.vercel.app/",
          img: project4Img,
        },
      ]
    },
  },
  footer: {
    copyright: 'Developed & designed by Muhammad Iqbal 🚀 2023.'
  }
};

export default portfolioData;