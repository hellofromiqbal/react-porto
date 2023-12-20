import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const portfolioData = {
  header: {
    IntroProfile: {
      name: 'Muhammad Iqbal',
      role: 'MERN Web Developer',
      excerpt: 'I build exceptional and accessible digital experiences for the web.'
    },
    navbar: [
      { name: 'ABOUT', url: "#about" },
      { name: 'EXPERIENCE', url: "#experience" },
      { name: 'PROJECTS', url: "#projects" }
    ],
    SocialMedia: [
      { name: 'Github', icon: <FaGithub className="socialMediaIcon"/>,url: "https://www.github.com" },
      { name: 'Instagram', icon: <FaInstagram className="socialMediaIcon"/>,url: "https://www.instagram.com" },
      { name: 'Twitter', icon: <FaTwitter className="socialMediaIcon"/>,url: "https://www.twitter.com" },
      { name: 'LinkedIn', icon: <FaLinkedin className="socialMediaIcon"/>,url: "https://www.linkedin.com" },
    ]
  },
  main: {
    experienceSection: {
      sectionTitle: 'EXPERIENCE',
      experienceList: [
        {
          period: '2018-2019',
          role: 'Front-End Web Developer',
          company: 'Gikslab',
          desc: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
          technologies: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'Framer Motion']
        },
        {
          period: '2018-2019',
          role: 'Front-End Web Developer',
          company: 'Gikslab',
          desc: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
          technologies: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'Framer Motion']
        }
      ]
    },
    projectsSection: {
      sectionTitle: 'PROJECTS',
      projectsList: [
        {
          period: '2018-2019',
          role: 'Front-End Web Developer',
          company: 'Gikslab',
          desc: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
          technologies: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'Framer Motion']
        },
        {
          period: '2018-2019',
          role: 'Front-End Web Developer',
          company: 'Gikslab',
          desc: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
          technologies: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'Framer Motion']
        }
      ]
    },
  },
  footer: {
    copyright: 'Developed & designed by Muhammad Iqbal 🚀 2023.'
  }
};

export default portfolioData;