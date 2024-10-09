import React, { useEffect } from 'react';
import AOS from 'aos'; // Change to import
import styles from '@styles/skills.module.css'; 
import 'aos/dist/aos.css'; 

const Skills = () => {
    useEffect(() => {
        AOS.init({ offset: 0 }); // Initialize AOS here
    }, []);

    return (
        <>
            <div className={styles.skillsContainer}>
                <h1>MY SKILLS</h1>

                <section className={styles.skillSection}>
                    <h2>Technical Skills</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fab fa-html5"></i>
                            <h3>HTML5</h3>
                            <p>Expertise in building responsive web layouts with semantic HTML5.</p>
                        </div>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fab fa-css3-alt"></i>
                            <h3>CSS3</h3>
                            <p>Proficient in styling and animations using CSS3 and preprocessors.</p>
                        </div>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fab fa-js-square"></i>
                            <h3>JavaScript</h3>
                            <p>Skilled in creating interactive web applications using JavaScript.</p>
                        </div>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fab fa-react"></i>
                            <h3>ReactJS</h3>
                            <p>Developing dynamic user interfaces with ReactJS and its ecosystem.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.skillSection}>
                    <h2>Soft Skills</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fas fa-people-arrows"></i>
                            <h3>Teamwork</h3>
                            <p>Strong ability to work collaboratively in diverse team environments.</p>
                        </div>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fas fa-lightbulb"></i>
                            <h3>Creativity</h3>
                            <p>Creative problem-solving to deliver efficient and innovative solutions.</p>
                        </div>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fas fa-handshake"></i>
                            <h3>Communication</h3>
                            <p>Excellent communication skills for effective interaction and presentations.</p>
                        </div>
                        <div className={styles.skill} data-aos="fade-up" data-aos-duration="1500">
                            <i className="fas fa-clock"></i>
                            <h3>Time Management</h3>
                            <p>Efficiently balancing tasks and meeting deadlines under pressure.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Skills;

