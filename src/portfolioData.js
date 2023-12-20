import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import project1Img from './assets/images/projects/projects-project1.jpg'
import project2Img from './assets/images/projects/projects-project2.jpg'
import project3Img from './assets/images/projects/projects-project3.jpg'

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
      { name: 'Github', icon: <FaGithub className="socialMediaIcon"/>,url: "https://www.github.com" },
      { name: 'Instagram', icon: <FaInstagram className="socialMediaIcon"/>,url: "https://www.instagram.com" },
      { name: 'Twitter', icon: <FaTwitter className="socialMediaIcon"/>,url: "https://www.twitter.com" },
      { name: 'LinkedIn', icon: <FaLinkedin className="socialMediaIcon"/>,url: "https://www.linkedin.com" },
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
          company: 'Gikslab',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id eius non iusto sequi molestias libero aspernatur deleniti aut. Nam aliquid distinctio doloremque labore? Reprehenderit nobis vel sunt. Ad, illum.',
          technologies: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'Framer Motion'],
          url: "https://www.gikslab.com"
        },
        {
          id: 2,
          period: '2021-2022',
          role: 'Front-End Web Developer',
          company: 'Cheedles Indonesia',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id eius non iusto sequi molestias libero aspernatur deleniti aut. Nam aliquid distinctio doloremque labore? Reprehenderit nobis vel sunt. Ad, illum.',
          url: "https://www.google.com"
        },
        {
          id: 3,
          period: '2020-2021',
          role: 'Customer Service',
          company: 'CIMB Niaga',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id eius non iusto sequi molestias libero aspernatur deleniti aut. Nam aliquid distinctio doloremque labore? Reprehenderit nobis vel sunt. Ad, illum.',
          url: "https://www.google.com"
        }
      ]
    },
    projectsSection: {
      sectionTitle: 'projects',
      projectsList: [
        {
          id: 1,
          title: 'Willow Project',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id eius non iusto sequi molestias libero aspernatur deleniti aut. Nam aliquid distinctio doloremque labore? Reprehenderit nobis vel sunt. Ad, illum.',
          technologies: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'Framer Motion'],
          url: "#",
          img: project1Img,
        },
        {
          id: 2,
          title: 'HealthHelp',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id eius non iusto sequi molestias libero aspernatur deleniti aut. Nam aliquid distinctio doloremque labore? Reprehenderit nobis vel sunt. Ad, illum.',
          technologies: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
          url: "#",
          img: project2Img,
        },
        {
          id: 3,
          title: 'Light House',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id eius non iusto sequi molestias libero aspernatur deleniti aut. Nam aliquid distinctio doloremque labore? Reprehenderit nobis vel sunt. Ad, illum.',
          technologies: [ 'React.js', 'Tailwind', 'Firebase'],
          url: "#",
          img: project3Img,
        },
      ]
    },
  },
  footer: {
    copyright: 'Developed & designed by Muhammad Iqbal 🚀 2023.'
  }
};

export default portfolioData;