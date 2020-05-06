import React from "react";

let dateYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p> © Copyright {dateYear} </p>
    </footer>
  );
}

export default Footer;
