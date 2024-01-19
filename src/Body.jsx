import List from "./components/ListArray/List.jsx";
import ListTech from "./components/ListTechs.jsx";
import {techs} from "./components/Data/Data.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ContactForm from "./components/ContactForm/ContactForm";
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import ListReducer from './components/ListReducer/ListReducer.jsx';
import Hero from "./components/Hero/Hero";

function Body() {
  return (
    <>
      <Hero></Hero>
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
