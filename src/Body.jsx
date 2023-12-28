import Card from "./components/Card.jsx";
function Body() {
  const visitor = "visitor";
  const employer = "professional";
  const friend = "friend";
  return (
    <>
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
