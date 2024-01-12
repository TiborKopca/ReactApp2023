import styles from "./Card.module.css";
import propTypes from "prop-types";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return (
    <section id="myWorks" className={styles.cardWrapper}>
      {children}
    </section>
  );
}

function Cards() {
  return (
      <Wrapper>
        <h2 className={styles.cardsHeader}>My work</h2>
        <Card projectName="Equestrian statues web" year="2018"></Card>
        <Card projectName="Text game in Java" year="2019"></Card>
        <Card projectName="Some work"></Card>
      </Wrapper>
  );
}
export default Cards;
//PROPS VALIDATION
Cards.propTypes = {
  children: propTypes.any,
};
//DEFAULT PROPS
Cards.defaultProps = {
  children: "Default paragraph",
};
