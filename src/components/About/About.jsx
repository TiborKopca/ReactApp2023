import { useState } from 'react';
import propTypes from "prop-types";
import styles from './About.module.css';

//Accordion
export default function About() {

  const [activeIndex, setActiveIndex] = useState(0);
  
  function Panel({title, children, isActive, onShow}) {
    return (
      <section className="panel">
        <h3>{title}</h3>
            {isActive 
            ? 
            (<p>{children}</p>) 
            : 
            (<button onClick={onShow}>Show</button>
        )}
      </section>
    );
  }

  return (
    <section className={styles.aboutWrapper} id="About">
      <h2>About me</h2>
      <Panel
        title="Childhood"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      > 
        <span lang="sk-SK">Ako by slováci povedali : dopiči!</span>Cillum duis anim labore aliquip qui. Ut elit quis duis id proident pariatur dolore mollit ipsum. Est consequat anim dolor voluptate. Consequat ipsum consectetur excepteur excepteur non dolor quis ullamco laboris qui laboris. Consequat ut nostrud minim est fugiat Lorem sunt aliqua magna laboris non sit. Veniam culpa eiusmod reprehenderit esse consectetur eiusmod proident veniam cupidatat do ut culpa. Aliqua fugiat pariatur mollit est ullamco exercitation id magna veniam ullamco adipisicing ad culpa tempor.
      </Panel>
      <Panel
        title="Education"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <i lang="la">Malus sieversii </i>Ipsum cillum veniam dolore nostrud. Duis duis magna deserunt reprehenderit. Consequat ipsum voluptate Lorem quis anim laborum eu velit dolor commodo commodo dolor. Ullamco voluptate est exercitation officia fugiat enim ex cupidatat pariatur.
      </Panel>
      <Panel
        title="Interests"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Non sit ullamco adipisicing excepteur dolore esse cupidatat nisi adipisicing consequat. Fugiat mollit in consequat mollit dolore dolore nulla proident reprehenderit aliqua ad Lorem tempor. Est dolor incididunt est tempor tempor ad. Sunt irure ut dolore do eiusmod.

        Fugiat amet exercitation dolor cillum ex. Incididunt aute ea amet voluptate irure laboris quis eiusmod ea ex. Magna dolore est ipsum tempor id veniam excepteur. Commodo nulla ea dolore enim magna amet. Non aute duis dolore ad commodo. Aute esse aliquip eu non Lorem irure occaecat commodo id.
      </Panel>
    </section>
  );
}



//PROPS VALIDATION
About.propTypes = ({
    title: propTypes.string,
    children: propTypes.string,
    isActive:propTypes.number,
    onShow: propTypes.any
  });
//DEFAULT PROPS
About.defaultProps = {
    title: "Default paragraph",
    isActive: false
}
