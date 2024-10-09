import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from '@styles/index.module.css';

const Home = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ offset: 0 });
    });

    let speed = 100;
    const texts = ["Web Developer", "Creative Coder", "Problem Solver"];
    let textIndex = 0;
    let characterIndex = 0;

    const typeWriter = () => {
      if (textRef.current) {
        if (characterIndex < texts[textIndex].length) {
          textRef.current.innerHTML += texts[textIndex].charAt(characterIndex);
          characterIndex++;
          setTimeout(typeWriter, speed);
        } else {
          setTimeout(eraseText, 1000);
        }
      }
    };

    const eraseText = () => {
      if (textRef.current && textRef.current.innerHTML.length > 0) {
        textRef.current.innerHTML = textRef.current.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
      }
    };
    // Start typewriter effect
    typeWriter(); 
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/images/favicon.ico" sizes="48x48" type="image" />
        <title>Syeda Qurrat Portfolio</title>
      </Head>
      <div id="navbar"></div>

      <section>
        <div className={styles['main-container']}>
          <div className={styles.image} data-aos="zoom-out" data-aos-duration="3000">
            <Image src="/images/img-1.jpg" alt="Image of Syeda Qurrat" layout="responsive" objectFit="cover" width ={500} height={ 400}/>
          </div>

          <div className={styles.content}>
            <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
              Hey I'm <span>Syeda Qurrat</span>
            </h1>
            <div
              className={styles.typewriter}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="900"
            >
              I'm a <span className={styles['typewriter-text']} ref={textRef}></span>
              <label htmlFor="">|</label>
            </div>
            <p
              data-aos="flip-down"
              data-aos-duration="1500"
              data-aos-delay="1100"
            >
            I’m Syeda Qurrat, a passionate web developer skilled in HTML, CSS, JavaScript, and TypeScript. I enjoy creating user-friendly web applications and constantly improving my coding techniques. Recently, I’ve started exploring Next.js, which has sharpened my ability to build fast, scalable web applications. With features like server-side rendering and static site generation, I look forward to creating dynamic and SEO-friendly websites that deliver seamless user experiences. 
            </p>
           
            <div className={styles.btn} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
              <a href="./contact">
                <button>Hire Me</button>
              </a>
              <a href="./resume">
                <button>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script src="./dist/navbar.js"></script>
      <script src="./dist/main.js"></script>
    </>
  );
};

export default Home;

