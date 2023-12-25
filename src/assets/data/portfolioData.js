import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import project1Img from '../images/projects/post-it.jpg';
import project2Img from '../images/projects/projects-project2.jpg';
import project3Img from '../images/projects/projects-project3.jpg';

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
          company: 'Gikslab',
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
          title: 'Post-it',
          desc: 'A social media application with several features such as creating a post, liking a post, making account profile changes and more.',
          technologies: [ 'Next.js', 'MongoDb', 'Tailwind', 'React-Redux', 'JWT', 'Bcrypt', 'Mailtrap'],
          url: "https://post-it-socialmedia.vercel.app/",
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