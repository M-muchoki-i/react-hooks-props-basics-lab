import React from "react";

function Links({ github, linkedin }) {
  return (
    <section>
      <h3>Links</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        {github}
      </a>
      <br />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </section>
  );
}

export default Links;
