import propTypes from "prop-types";

const skill1 = "HTML";
const skill2 = "CSS";
const skill3 = "Javascript";
const skill4 = "React";

function Item({ name, isDone }) {
  if (isDone) {
    return <li className="item">{name} &#x2713;</li>;
  }
  //we can use also nothing => return null;
  return <li className="item">{name}</li>;
}

function TernaryItem({ name, isDone }) {
  return (
    <li className="item">
      {isDone ? (
        "Did you finish " + name + " yet ?"
      ) : (
        <del>You should stop wasting your time and learn {skill4} already!</del>
      )}
    </li>
  );
}
function AndOperatorItem(props) {
  return (
    <li className="item">
      {props.name} {props.isDone && " done also!"}
    </li>
  );
}

export default function List() {
  return (
    <section>
      <h2>List of things on the website</h2>
      <ul>
        <Item isDone={true} name={skill1} />
        <Item isDone={true} name={skill2} />
        <Item isDone={true} name={skill3} />
        <AndOperatorItem isDone={false} name={skill4} />
        <TernaryItem isDone={true} name={skill4} />
        <li>Or &quot;just&quot; {skill2.toUpperCase()}?</li>
      </ul>
    </section>
  );
}
//PROPS VALIDATION
Item.propTypes,TernaryItem.propTypes,AndOperatorItem.propTypes = ({
    name: propTypes.string.isRequired,
    isDone: propTypes.bool.isRequired,
  });
