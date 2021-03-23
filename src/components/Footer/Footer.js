import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.backgroundColor} />
      <footer className={styles.footer}>
        All character assets taken from{" "}
        <a
          href="https://www.openpeeps.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Peeps
        </a>
        , by Pablo Stanley
      </footer>
    </div>
  );
};

export default Footer;
