import { useEffect, useState } from 'react';
import styles from '@styles/about.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Hello! I'm Hafiza Syeda Qurrat-ul-Ain, a web developer passionate about creating efficient and innovative web applications. With a solid foundation in front-end technologies like HTML, CSS, and JavaScript, I am currently diving into the world of full-stack development, learning the MERN stack. Along with my technical skills, I believe in the power of creativity and problem-solving. Whether I'm building websites or writing stories, my goal is always to deliver something valuable. I'm constantly learning and striving to improve my skills. In my free time, I love to explore new frameworks and stay on the latest trends in web development. Feel free to explore my portfolio and contact me if you'd like to collaborate or know more about my work.";

    useEffect(() => {
        AOS.init({ offset: 0 });

        let index = 0;
        const speed = 40; 

        const typeWriterIntro = () => {
            if (index < fullText.length) {
                setDisplayText((prev) => prev + fullText.charAt(index));
                index++;
                setTimeout(typeWriterIntro, speed);
            }
        };

        typeWriterIntro(); 
    }, []); 

    return (
        <section>
            <div className={styles.aboutContainer} data-aos="fade-up" data-aos-duration="1500">
                <h1>About Me</h1>
                <div className={styles.contentImageContainer}>
                    <div className={styles.aboutContent}>
                        <p>{displayText}</p> 
                    </div>
                    <div className={styles.img}>
                        <img src="/images/image-2.png" alt="image" /> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
