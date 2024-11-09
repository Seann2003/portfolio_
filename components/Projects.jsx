import React from "react";
import ProjectCard from "./ProjectCard";
import { Quicksand } from 'next/font/google'
 
const quicksand = Quicksand({
  weight: '700',    
  subsets: ['latin'],
})

const projectData = [
    {
        id: 1,
        title: "Hotel Booking System",
        description: "Hotel Booking System using Java and Swing UI",
        image: "/projects/linkedout&about.png",
        gitUrl: "https://github.com/Seann2003/HotelBookingSystemAPU"

    },
    {
        id: 2,
        title: "Verdunic",
        description: "Gamified the process of learning about gardening",
        image: "/projects/Verdunic.jpeg",
        gitUrl: "https://verdunic.vercel.app/"
    },
    {
        id: 3,
        title: "Quiz Website",
        description: "Quiz website that is like Quizzeria using React and Flask",
        image: "/projects/FundChat.png",
        gitUrl: "https://github.com/Seann2003/Quiz-Website---React-and-Flask-Backend"
    }, 
    {
        id: 4,
        title: "Private Polling Website Using World ID",
        description: "Privatised polling website using World ID for security",
        image: "/projects/PrivaPoll.png",
        gitUrl: "https://privapoll.vercel.app/"
    },
    {
        id: 5,
        title: "Kreate",
        description: "A community for encouraging people to start building projects no matter their background", 
        image: "/projects/Kreate.png",
        gitUrl: "https://startkreate.xyz/"
    },
    {
        id: 6,
        title: "MyJangka",
        description: "Prediction market platform that allows users to buy shares based on the outcomes of economic data in different countries", 
        image: "/projects/MyJangka.png",
        gitUrl: "https://github.com/Seann2003/MyJangka"
    }
];

const Projects = () => {
    return (
        <div id="projects" className={`w-[75%] ml-14 ${quicksand.className}`}>
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;