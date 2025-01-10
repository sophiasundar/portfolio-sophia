import React, { useEffect, useState } from 'react'; 
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';  // React Icons
import profile from './Components/assets/profile/about.png';  // Profile image
import about  from './Components/assets/about/girl coder.gif';
import html5 from './Components/assets/TandS/html5.png';
import css3 from './Components/assets/TandS/css3.png';
import js from './Components/assets/TandS/js.png';
import react from './Components/assets/TandS/react.png';
import bootstrap from './Components/assets/TandS/bootstrap.png';
import reactbootstrap from './Components/assets/TandS/reactbootstrap.jpg';
import materialUi from './Components/assets/TandS/materialUi.png';
import mongodb from './Components/assets/TandS/mongodb.png';
import mysql from './Components/assets/TandS/mysql.png';
import nodejs from './Components/assets/TandS/nodejs.png';
import git from './Components/assets/TandS/git.png';
import github from './Components/assets/TandS/github.png';
import vscode from './Components/assets/TandS/vscode.jpg';
import vercel from './Components/assets/TandS/vercel.png';
import postman from './Components/assets/TandS/postman.png';
import netlify from './Components/assets/TandS/netlify.png';
import tailswind from './Components/assets/TandS/tailswind.png';
import Redux from './Components/assets/TandS/Redux.png';
import BountiBowl from './Components/assets/projects/BountiBowl.png';
import catalog from './Components/assets/projects/catalog.png';
import talkpulse from './Components/assets/projects/talkpulse.png';
import paydone from './Components/assets/projects/paydone.png';
import Cardss from './Components/cards';
import AOS from 'aos';
import 'aos/dist/aos.css';


const skills = [
  { image: html5, name: "HTML5" },
  { image: css3, name: "CSS3" },
  { image: js, name: "Javascript" },
  { image: bootstrap, name: "Bootstrap" },
  { image: react, name: "React" },
  { image: nodejs, name: "Node.js" },
  { image: mongodb, name: "MongoDB" },
  { image: mysql, name: "MySQL" },
  { image: git, name: "Git" },
  { image: github, name: "GitHub" },
  { image: materialUi, name: "Material UI" },
  { image: reactbootstrap, name: "React Bootstrap" },
  {image: tailswind, name: "Tailswind CSS" },
  {image: Redux, name: "Redux "}
];

const tools = [
  { image: vscode, name: "VS Code" },
  { image: postman, name: "Postman" },
  { image: netlify, name: "Netlify" },
  { image: vercel, name: "Vercel" },
];

const SkillsTools = ({ skills, tools }) => (
  <section className="py-16 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-center">
    <div className="skills-tools py-12" id="skills-tools">
      <div className="container mx-auto px-4 text-center"> {/* Added px-4 to provide padding on left and right */}
        <h1 className="text-4xl font-extrabold text-white mb-6" data-aos="fade-up">SKILLS & TOOLS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <h4 className="col-span-full text-2xl font-semibold text-white" data-aos="fade-up">Skillset:</h4>
          {skills.map((e) => (
            <div className="cube-container" key={e.name} data-aos="fade-up">
              <div className="cube">
                <Cardss details={e} />
              </div>
            </div>
          ))}
          <h4 className="col-span-full text-2xl font-semibold text-white mt-10" data-aos="fade-up">Tools I Use:</h4>
          {tools.map((e) => (
            <div className="cube-container" key={e.name}>
              <div className="cube">
                <Cardss details={e} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);




<style jsx>{`
  .perspective {
    perspective: 1000px;
  }
  .cube {
    transform-style: preserve-3d;
  }
`}</style>




const App = () => {

  const [activeSection, setActiveSection] = useState("home");
  

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
    });
  }, []);
  return (
    <>
     {/* Top Bar Navigation */}
     <nav className="fixed top-0 left-0 w-full bg-transparent z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-lg">Hello, Hi</h1>
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="#home" className={`hover:text-gray-300 ${activeSection === "home" ? "text-gray-300" : ""}`}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={`hover:text-gray-300 ${activeSection === "about" ? "text-gray-300" : ""}`}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={`hover:text-gray-300 ${activeSection === "skills" ? "text-gray-300" : ""}`}>
              SkillsTools
              </a>
            </li>
            <li>
              <a href="#projects" className={`hover:text-gray-300 ${activeSection === "projects" ? "text-gray-300" : ""}`}>
             Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={`hover:text-gray-300 ${activeSection === "contact" ? "text-gray-300" : ""}`}>
              Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

    <div className="font-sans bg-gray-100">
       {/* Top Bar Navigation */}
       
      {/* Hero Section */}
    {/* Hero Section */}
  <section id="home" className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white h-screen flex items-center justify-center text-center overflow-hidden">
    {/* Background Image (optional) */}
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" ></div>
    
    {/* Content */}
    <div className="relative z-10 space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">
        Hi, I'm Sophia Christina Gifta
      </h1>
      <hr className="border-white w-20 mx-auto my-2" />
      <h4 className="text-xl animate__animated animate__fadeIn animate__delay-2s">MERN Stack Web Developer</h4>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6 animate__animated animate__fadeIn animate__delay-3s">
        {/* GitHub */}
        <a href="https://github.com/sophiasundar" rel="noreferrer" target="_blank" className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition duration-300">
          <FaGithub size={30} />
        </a>
        
        {/* Email */}
        <a href="mailto:sophiagifta17@gmail.com" rel="noreferrer" target="_blank" className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition duration-300">
          <FaEnvelope size={30} />
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/sophia-gifta17/" rel="noreferrer" target="_blank" className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition duration-300">
          <FaLinkedin size={30} />
        </a>

        {/* Resume */}
        <a href="https://drive.google.com/file/d/1uZ3NGEvpAT3JfKi03028HV_5dDsBW3ud/view?usp=sharing" rel="noreferrer" target="_blank" className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition duration-300">
          <FaFileDownload size={30} />
        </a>
      </div>

      {/* Dancing Profile Image */}
      <div className="mt-6 animate__animated animate__fadeIn animate__delay-4s">
        <img
          src={profile}
          alt="About Sophia"
          className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-white shadow-lg animate-dance"
        />
      </div>
    </div>
  </section>

 {/* About Section */}
 
<div id="about" className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0" data-aos="fade-up">
  <div className="container mx-auto text-center">
    <h1 className="text-4xl font-extrabold text-white mb-6" data-aos="fade-up">ABOUT</h1>
    <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="cardmedia">
        <img className=" h-[325px] w-[325px] object-cover rounded-t-lg" src={about} alt="about" />
      </div>
      <div className="cardcontent p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-up">About Me</h3>
        <p className="text-base text-gray-600 leading-relaxed" data-aos="fade-up">
          Hey, I'm Sophia Christina Gifta, an aspiring web developer with a passion for creating dynamic and interactive web applications. Constantly seeking opportunities
          to learn new technologies and improve my development workflow. I'm eager to start planning an innovative app of my own. I'm proficient in JavaScript, React, Node.js, and MongoDB.
        </p>
      </div>
    </div>
  </div>
</div>



{/* Skills and Tools */}
<div id="skills" className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0">
  <SkillsTools skills={skills} tools={tools} />
</div>



      {/* Projects Section */}

     <section id="projects" className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0">
     <h1 className="text-4xl font-extrabold text-white mb-6 text-center" data-aos="fade-up">PROJECTS</h1>
      <section className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10" data-aos="fade-up">
  <h2 className="text-4xl font-extrabold text-white mb-6 text-center" data-aos="fade-up">BountifulBowl</h2>
    {/* Project Image Section */}
    <div className="flex-1 lg:w-2/3 mb-6 lg:mb-0" data-aos="fade-up">
      <img
        src={BountiBowl}
        alt="Bountiful Bowl Project"
        className="w-full h-80 object-cover rounded-lg shadow-lg" data-aos="fade-up"
      />

      {/* Tools Used Section */}
      <div className="flex flex-wrap gap-1 mt-6">
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React Context API</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React Router DOM</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Axios</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Bootstrap</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Node.js</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Express</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">MongoDB</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Bcrypt</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">JSON Web Tokens</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">CORS</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Dotenv</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Nodemailer</span>
      </div>
    </div>
    
    {/* Project Description & Features Section */}
    <div className="flex-1 lg:w-1/3 space-y-8" data-aos="fade-up">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-4">Description:</h4>
        <p className="text-gray-600 text-base leading-relaxed">
          Purpose of this application is to serve for orphan people, the surplus amount of food can be utilized by the needy.
          The banquet manager will create the list of food and banquet address, availability date, and time of the food before getting wasted.
          The orphanage manager who is ready to receive the food will send an email to the banquet manager.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-4">Features:</h4>
        <ul className="list-disc pl-5 text-gray-600 text-base">
          <li>Authorized view, edit, delete cards.</li>
          <li>Good Admin control and role-based authorization is maintained.</li>
          <li>Orphanage manager will send an email, email feature is added.</li>
          <li>Efficient data management.</li>
          <li>Good authentication for users.</li>
          <li>Separate dashboard is maintained for the Banquet manager and Orphanage manager.</li>
          <li>Effective Context API is utilized.</li>
          <li>Decent design with proper responsiveness for all devices.</li>
        </ul>
      </div>
      
      {/* Project Links Buttons */}
      <div className="flex gap-4 mt-6" data-aos="fade-up">
        <a
          href="https://github.com/sophiasundar/B47-Backend-FS/tree/main/bountifulBowlBE"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Github BE
        </a>
        <a
          href="https://github.com/sophiasundar/bountifulbowl"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Github FE
        </a>
        <a
          href="https://bountifulbowl.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Demo
        </a>
      </div>
    </div>
  </div>
</section>

<section className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10" data-aos="fade-up">
  <h2 className="text-4xl font-extrabold text-white mb-6 text-center" data-aos="fade-up">Item Catalog</h2>
    {/* Project Image Section */}
    <div className="flex-1 lg:w-2/3 mb-6 lg:mb-0" >
      <img
        src={catalog}
        alt="Catalog Project"
        className="w-full h-80 object-cover rounded-lg shadow-lg" data-aos="fade-up"
      />

      {/* Tools Used Section */}
      <div className="flex flex-wrap gap-1 mt-6">
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React Context API</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React Router DOM</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Axios</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Bootstrap</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Node.js</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Express</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">MongoDB</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Bcrypt</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">JSON Web Tokens</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">CORS</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Dotenv</span>
      </div>
    </div>
    
    {/* Project Description & Features Section */}
    <div className="flex-1 lg:w-1/3 space-y-8" data-aos="fade-up">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-4">Description:</h4>
        <p className="text-gray-600 text-base leading-relaxed">
          Item catalog is to showcase the items or products to users.
          It serves as a digital representation of items allowing users to browse,
          search, and view information about each item.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-4">Features:</h4>
        <ul className="list-disc pl-5 text-gray-600 text-base">
          <li>Can view, edit, delete cards</li>
          <li>Showcase several categories of items in different tabs</li>
          <li>Efficient data management</li>
          <li>Good authentication for users</li>
          <li>Decent design with proper responsiveness for all devices</li>
        </ul>
      </div>
      
      {/* Project Links Buttons */}
      <div className="flex gap-4 mt-6" data-aos="fade-up">
        <a
          href="https://github.com/sophiasundar/B47-Backend-FS/tree/main/capstoneFS"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Github BE
        </a>
        <a
          href="https://github.com/sophiasundar/frontendcapstone"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Github FE
        </a>
        <a
          href="https://frontendcapstone-7ipu.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Demo
        </a>
      </div>
    </div>
  </div>
</section>


<section className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10" data-aos="fade-up">
  <h2 className="text-4xl font-extrabold text-white mb-6 text-center" data-aos="fade-up">TalkPulse</h2>
    {/* Project Image Section */}
    <div className="flex-1 lg:w-2/3 mb-6 lg:mb-0">
      <img
        src={talkpulse}
        alt="Social Media Web App Project"
        className="w-full h-80 object-cover rounded-lg shadow-lg" data-aos="fade-up"
      />

      {/* Tools Used Section */}
      <div className="flex flex-wrap gap-1 mt-6">
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Redux Toolkit</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Redux Thunk</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React Router DOM</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Axios</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Tailwind CSS</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Node.js</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Express</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Mongoose</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Bcrypt</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">JSON Web Tokens</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">CORS</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Dotenv</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">multer-storage</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Cloudinary</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">socket.io</span>
      </div>
    </div>
    
    {/* Project Description & Features Section */}
    <div className="flex-1 lg:w-1/3 space-y-8" data-aos="fade-up">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-4">Description:</h4>
        <p className="text-gray-600 text-base leading-relaxed">
          Just like a social media web app with features including user profile management
           such as number of followers and following. Users can edit their profile and view user 
           details, create, edit, delete, and view posts. The app includes functionality for 
           mutual users and a following list, as well as the ability to send follow requests 
           by exploring users. TalkPulse main theme is to chat endless, so chat feature is 
           implemented using Socket.io
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-4">Features:</h4>
        <ul className="list-disc pl-5 text-gray-600 text-base">
          <li>Good authentication flow using Redux.</li>
          <li>Good user engagement.</li>
          <li>CRUD for post management and ability to like and create comments.</li>
          <li>Follower list and following list of the current user.</li>
          <li>Follower request feature is achieved by exploring the user tab.</li>
          <li>Current user can chat with follower and following list of users using Socket.io</li>
        </ul>
      </div>
      
      {/* Project Links Buttons */}
      <div className="flex gap-4 mt-6" data-aos="fade-up">
        <a
          href="https://github.com/sophiasundar/Social-Media-BE/tree/main/beTalkpulse"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Github BE
        </a>
        <a
          href="https://github.com/sophiasundar/socialmediafe"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Github FE
        </a>
        <a
          href="https://socialmediafe.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Demo
        </a>
      </div>
    </div>
  </div>
</section>

<section className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10" data-aos="fade-up">
  <h2 className="text-4xl font-extrabold text-white mb-6 text-center" data-aos="fade-up">PayDone</h2>
    {/* Project Image Section */}
    <div className="flex-1 lg:w-2/3 mb-6 lg:mb-0">
      <img
        src={ paydone}
        alt="PayDone Payment Integration App"
        className="w-full h-80 object-cover rounded-lg shadow-lg" data-aos="fade-up"
      />

      {/* Tools Used Section */}
      <div className="flex flex-wrap gap-1 mt-6">
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Redux Toolkit</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Redux Thunk</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">React Router DOM</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Axios</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Tailwind CSS</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Node.js</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Express</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Mongoose</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Bcrypt</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">JSON Web Tokens</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">CORS</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Dotenv</span>
        <span className="bg-orange-400 text-white py-1 px-3 rounded-full text-xs font-semibold hover:bg-orange-500 transition duration-300">Razorpay</span>
      </div>
    </div>
    
    {/* Project Description & Features Section */}
    <div className="flex-1 lg:w-1/3 space-y-8" data-aos="fade-up">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-4">Description:</h4>
        <p className="text-gray-600 text-base leading-relaxed">
          "PayDone" is a third-party payment integration app using Razorpay, enabling users to make payments and automatically create and manage payment transactions with full CRUD functionality.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-4">Features:</h4>
        <ul className="list-disc pl-5 text-gray-600 text-base">
          <li>Good authentication flow using Redux.</li>
          <li>Secure payment integration using Razorpay.</li>
          <li>CRUD functionality for managing user payment records.</li>
        </ul>
      </div>
      
      {/* Project Links Buttons */}
      <div className="flex gap-4 mt-6" data-aos="fade-up">
        <a
          href="https://github.com/sophiasundar/server-Pay/tree/main/be-paydone"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
          
        >
          Github BE
        </a>
        <a
          href="https://github.com/sophiasundar/fe-paydone"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
          
        >
          Github FE
        </a>
        <a
          href="https://fe-paydone.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
          
        >
          Demo
        </a>
      </div>
    </div>
  </div>
</section>


</section>




      {/* Contact Section */}
      <section id='contact' className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-12 mb-0">
        <h2 className="text-3xl text-white font-semibold text-center" data-aos="fade-up">Contact Me</h2>
        <form className="mt-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 w-full rounded-lg border border-gray-300 mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 w-full rounded-lg border border-gray-300 mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 w-full rounded-lg border border-gray-300 mb-4"
          ></textarea>
          <button className="bg-gray-500 text-white py-3 px-6 rounded-lg">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
<footer className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white py-6">
  <div className="container mx-auto text-center">
    <div className="flex justify-center space-x-6 mb-4">
      {/* GitHub */}
      <a href="https://github.com/sophiasundar" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 transition duration-300">
        <FaGithub size={24} />
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/sophia-gifta17/" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 transition duration-300">
        <FaLinkedin size={24} />
      </a>
      {/* Email */}
      <a href="mailto:sophiagifta17@gmail.com" className="text-white hover:text-gray-300 transition duration-300">
        <FaEnvelope size={24} />
      </a>
    </div>
    <p className="text-sm">&copy; {new Date().getFullYear()} Sophia Christina Gifta. All rights reserved.</p>
  </div>
</footer>


    </div>
    </>
  );
};

export default App;


