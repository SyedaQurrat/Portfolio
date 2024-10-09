import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@styles/resume.module.css'; 

const Resume: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>
            <div id="navbar"></div>
            <div className={styles.container}>
                <h1 className={styles['resume-heading']}>My Resume</h1>
                <div className={styles.top} data-aos="fade-up">
                    <div className={styles.imgBx}>
                        <div className={styles.box}>
                            <Image src="/images/img-6.jpg" alt="Resume Picture" width={500} height={650} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
