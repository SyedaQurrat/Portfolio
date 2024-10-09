import styles from '@styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
      <h3 className={styles.h3}>
          @SYEDA <span>
            QURRAT
          </span>
        </h3> 
        

        <a href="https://github.com/SyedaQurrat" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100092461852324" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/syeda-qurrat1991/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <p>&copy; 2024 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
