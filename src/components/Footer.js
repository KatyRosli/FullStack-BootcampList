import React from 'react';

const Footer = () => {
   return (
    <footer>
        <a
        href='https://github.com/KatyRosli/FullStack-BootcampList'
        target="_blank"
        rel="noopener noreferrer"
        className="github"
        >
        Open sourced on Github{" "}
        </a>
        by
        <a
        href='https://www.katyrosli.com'
        target="_blank"
        rel="nopener noreferrer"
        className="name"
        >
        {" "}
        Katy Rosli
        </a>
    </footer>
   );
}

export default Footer;
