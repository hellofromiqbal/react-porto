import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from './socialMedia.module.css';

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <ul className={styles.socialMediaList}>
        <li><a href="#github"><FaGithub className={styles.socialMediaIcon}/></a></li>
        <li><a href="#instagram"><FaInstagram className={styles.socialMediaIcon}/></a></li>
        <li><a href="#twitter"><FaTwitter className={styles.socialMediaIcon}/></a></li>
        <li><a href="#linkedin"><FaLinkedin className={styles.socialMediaIcon}/></a></li>
      </ul>
    </div>
  )
};

export default SocialMedia;