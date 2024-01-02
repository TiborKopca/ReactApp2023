import Card from "./components/Card.jsx";
import Button from "./components/Button/Button.jsx";

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return <div className="cardWrapper">{children}</div>;
}

function Body() {
  const visitor = "visitor";
  const employer = "professional";
  const friend = "friend";
  return (
    <>
      <Button></Button>
      <ul>
        <li>Are you a {visitor}?</li>
        <li>Area you an {employer}?</li>
        <li>Or &quot;just&quot; a {friend.toUpperCase()}?</li>
      </ul>
      <Wrapper>
        <Card projectName="Equestrian statues web" year="2018"></Card>
        <Card projectName="Text game in Java" year="2019"></Card>
        <Card projectName="Some work" ></Card>
      </Wrapper>
    </>
  );
}
export default Body;
