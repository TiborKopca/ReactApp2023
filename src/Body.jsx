import Card from "./components/Card.jsx";
import Button from "./components/Button/Button.jsx";
import List from "./components/List.jsx";

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return <div className="cardWrapper">{children}</div>;
}

function Body() {
  return (
    <>
      <Button></Button>
      <List></List>
      <Wrapper>
        <Card projectName="Equestrian statues web" year="2018"></Card>
        <Card projectName="Text game in Java" year="2019"></Card>
        <Card projectName="Some work" ></Card>
      </Wrapper>
    </>
  );
}
export default Body;
