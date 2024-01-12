import Button from "./components/Button/Button.jsx";
import List from "./components/ListArray/List.jsx";
import ListTech from "./components/ListTechs.jsx";
import {techs} from "./components/Data/Data.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ContactForm from "./components/ContactForm/ContactForm";
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import ListReducer from './components/ListReducer/ListReducer.jsx';

function Body() {
  return (
    <>
      <h1>Website in React!</h1>
      <Button ></Button>
      <SearchBar></SearchBar>
      <List></List>
      <ListReducer></ListReducer>
      <About></About>
      <Cards></Cards>
      <ListTech items={techs} category="TechSkills"/>
      <ContactForm></ContactForm>
    </>
  );
}
export default Body
