import { useState } from "react";
import propTypes from "prop-types";
import styles from "./About.module.css";

//Accordion
export default function About() {
  
    //SUB PANEL
    function Panel({ title, children }) {
    const [isActive, setActiveIndex] = useState(false);
    // console.log(isActive);
    return (
      <div className={styles.panelWrapper}>
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button
                className={styles.panelShowMoreButton} 
                onClick={() => setActiveIndex(true)}
                >Show
            </button>
        )}
      </div>
    );
  }

  return (
    <section className={styles.aboutWrapper} id="about">
      <h2>About me</h2>
      <p className={styles.aboutParagraph}>In this section you&apos;ll find all the non-important data.</p>
      <Panel title="Childhood" isActive={true}>
        <span lang="sk-SK">Ako by slováci povedali : popiči či dopiči! </span>
        Cillum duis anim labore aliquip qui. Ut elit quis duis id proident
        pariatur dolore mollit ipsum. Est consequat anim dolor voluptate.
        Consequat ipsum consectetur excepteur excepteur non dolor quis ullamco
        laboris qui laboris. 
      </Panel>
      <Panel title="Education">
        <i lang="la">Malus sieversii </i>Ipsum cillum veniam dolore nostrud.
        Duis duis magna deserunt reprehenderit. Consequat ipsum voluptate Lorem
        quis anim laborum eu velit dolor commodo commodo dolor. Ullamco
        voluptate est exercitation officia fugiat enim ex cupidatat pariatur.
      </Panel>
      <Panel title="Interests" d>
        Non sit ullamco adipisicing excepteur dolore esse cupidatat nisi
        adipisicing consequat. Fugiat mollit in consequat mollit dolore dolore
        nulla proident reprehenderit aliqua ad Lorem tempor. Est dolor
        incididunt est tempor tempor ad. Sunt irure ut dolore do eiusmod. 
        id.
      </Panel>
    </section>
  );
}

//PROPS VALIDATION
About.propTypes = {
  title: propTypes.string,
  children: propTypes.string,
};
//DEFAULT PROPS
About.defaultProps = {
  title: "Default paragraph",
};
