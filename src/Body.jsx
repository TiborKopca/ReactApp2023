import Card from "./components/Card.jsx";
import Button from "./components/Button/Button.jsx";

function Body() {
  const visitor = "visitor";
  const employer = "professional";
  const friend = "friend";
  return (
    <>
    <Button></Button>
      <ul>
        <li>{visitor}</li>
        <li>{employer}</li>
        <li>{friend.toUpperCase()}</li>
      </ul>
      <Card></Card>
      <Card></Card>
    </>
  );
}
export default Body;
