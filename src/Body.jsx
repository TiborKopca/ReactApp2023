import Card from "./components/Card.jsx";
import Button from "./components/Button/Button.jsx";
import List from "./components/List.jsx";
import ListTech from "./components/ListTechs.jsx";
import {techs} from "./components/Data/Data.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return <section id="myWorks" className="cardWrapper">{children}</section>;
}

function Body() {
  return (
    <>
      <Button ></Button>
      <SearchBar></SearchBar>
      <List></List>
      <Wrapper>
        <Card projectName="Equestrian statues web" year="2018"></Card>
        <Card projectName="Text game in Java" year="2019"></Card>
        <Card projectName="Some work" ></Card>
      </Wrapper>
        <ListTech items={techs} category="TechSkills"/>
    </>
  );
}
export default Body;
