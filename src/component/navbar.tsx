import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo} data-aos="zoom-in" data-aos-duration="1500">
          SYEDA <span>QURRAT</span>
        </div>
        <div className={styles.links}>
          <a href="/" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            Home
          </a>
          <a href="/about" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            About
          </a>
          <a href="/skills" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            Skills
          </a>
          <a href="/projects" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            Projects
          </a>
          <a href="/contact" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            Contact
          </a>
        </div>
        <i
          className={`fa-solid ${dropdownVisible ? "fa-xmark" : "fa-bars"}`}
          onClick={toggleDropdown}
          style={{ fontSize: "2rem", color: "white" }} 
        ></i>
      </div>
      {dropdownVisible && (
        <div className={`${styles.dropdown}`}>
          <div className={styles.dropdownLinks}>
            <a href="/" onClick={closeDropdown}>Home</a>
            <a href="/about" onClick={closeDropdown}>About</a>
            <a href="/skills" onClick={closeDropdown}>Skills</a>
            <a href="/projects" onClick={closeDropdown}>Projects</a>
            <a href="/contact" onClick={closeDropdown}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

