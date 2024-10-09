import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link
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
          <Link href="/" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            Home
          </Link>
          <Link href="/about" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            About
          </Link>
          <Link href="/skills" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            Skills
          </Link>
          <Link href="/projects" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            Projects
          </Link>
          <Link href="/contact" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            Contact
          </Link>
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
            <Link href="/" onClick={closeDropdown}>Home</Link>
            <Link href="/about" onClick={closeDropdown}>About</Link>
            <Link href="/skills" onClick={closeDropdown}>Skills</Link>
            <Link href="/projects" onClick={closeDropdown}>Projects</Link>
            <Link href="/contact" onClick={closeDropdown}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;