import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '@styles/contact.module.css';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        const AOS = require('aos');
        AOS.init({ offset: 0 });
    }, []);

    const handleSendMessage = () => {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLTextAreaElement).value;

        if (name && email && message) {
            alert("Your message is successfully sent!");
            (document.getElementById("name") as HTMLInputElement).value = "";
            (document.getElementById("email") as HTMLInputElement).value = "";
            (document.getElementById("message") as HTMLTextAreaElement).value = "";
        } else {
            alert("Please fill out all the fields before sending.");
        }
    };

    return (
        <div>
            <section className={styles.contactSection}>
                <div className={styles.contactContainer} data-aos="fade-up" data-aos-duration="1500">
                    <h1>Contact Me</h1>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <i className="fas fa-envelope"></i>
                            <p>Email: xyz@yahoo.com</p>
                        </div>
                        <div className={styles.infoItem}>
                            <i className="fas fa-phone-alt"></i>
                            <p>Phone: 123456789</p>
                        </div>
                        <div className={styles.infoItem}>
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Karachi, Pakistan</p>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows={5} required></textarea>

                            <button type="button" id="sendMessageButton" onClick={handleSendMessage}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className={styles.img}>
                    <Image src="/images/img-3.png" alt="Contact Image" width={500} height={750} />
                </div>
            </section>
        </div>
    );
};

export default Contact;



