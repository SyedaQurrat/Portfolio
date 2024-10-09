import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@styles/projects.module.css'; 
import Image from 'next/image'; // Importing the Image component from Next.js

const Projects: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div className={styles.body}>
            <section className={styles['projects-container']}>
                <h1 className={styles.h1}>My Projects</h1>
                <div className={styles['projects-grid']}>
                    {projects.map((project, index) => (
                        <div className={styles.project} data-aos="fade-up" key={index}>
                            <div className={styles['project-details']}>
                                <h2 className={styles.h2}>{project.title}</h2>
                                <p className={styles.p}>{project.description}</p>
                            </div>
                            <div className={styles['project-image']}>
                                <Image
                                    src={project.imageSrc}
                                    alt={project.title}
                                    width={300} // Set an appropriate width
                                    height={200} // Set an appropriate height
                                    layout="responsive" // Optional: adjust layout based on your needs
                                />
                            </div>
                            <div className={styles['project-buttons']}>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles['github-btn']}>
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// Sample project data
const projects = [
    {
        title: 'Resume Builder',
        description: 'An interactive tool that helps users create professional resumes using HTML, CSS, and JavaScript.',
        imageSrc: '/images/Resume.jpg', // Update the path for Next.js
        githubLink: 'https://vercel.live/link/milestone-4-resume-builder.vercel.app?via=project-dashboard-alias-list&p=1',
    },
    {
        title: 'To-Do List',
        description: 'A task management app that helps users track and organize their daily tasks using React for building interactive user interfaces and managing state efficiently.',
        imageSrc: '/images/To-Do-App.jpg', // Update the path for Next.js
        githubLink: 'https://vercel.live/link/to-do-app-in-react-pi.vercel.app?via=project-dashboard-alias-list&p=1',
    },
    {
        title: 'Expense Tracker',
        description: "An Expense Tracker app built using React that allows users to add, view, and manage their expenses efficiently with dynamic updates and state management.",
        imageSrc: '/images/Expense-Tracker-App.jpg', // Update the path for Next.js
        githubLink: 'https://vercel.live/link/code-alpha-expense-tracker-mu.vercel.app?via=project-dashboard-alias-list&p=1',
    },
    {
        title: 'Word Counter',
        description: 'A tool that counts words and characters in real-time, helping users track text length for better content management.',
        imageSrc: '/images/word-Counter.jpg', // Update the path for Next.js
        githubLink: 'https://github.com/SyedaQurrat/Word-Counter.git',
    },
    {
        title: 'Result Checker App',
        description: 'A simple yet effective app that allows students to check their exam results with a user-friendly interface.',
        imageSrc: '/images/result-Checker app.jpg', // Update the path for Next.js
        githubLink: '#',
    },
    {
        title: 'Assignment-45',
        description: 'Completed 45 assignments focusing on TypeScript, covering concepts like types, interfaces, functions, classes, and advanced TypeScript features.',
        imageSrc: '/images/Assignment-45.jpg', // Update the path for Next.js
        githubLink: 'https://github.com/SyedaQurrat/TypeScript-Assignments.git',
    },
    {
        title: 'Node projects',
        description: 'Developed various Node.js projects including an ATM machine, CLI number guessing game, TypeScript quiz, OOP-based bank system, currency converter, and BMI calculator, utilizing TypeScript and Inquirer for interactive command-line interfaces.',
        imageSrc: '/images/Node-projects.jpg', // Update the path for Next.js
        githubLink: 'https://github.com/SyedaQurrat?tab=repositories',
    },
    {
        title: 'SQL Online Course',
        description: 'A page for Systematic Quick Learning academy that provides details and enrollment options for SQL courses.',
        imageSrc: '/images/SQl.jpg', // Update the path for Next.js
        githubLink: 'https://github.com/SyedaQurrat?tab=repositories',
    },
    {
        title: 'Foody Website',
        description: 'A modern website showcasing restaurants and food items with an attractive and responsive design.',
        imageSrc: '/images/foody.jpg', // Update the path for Next.js
        githubLink: 'https://github.com/SyedaQurrat?tab=repositories',
    },
];

export default Projects;
