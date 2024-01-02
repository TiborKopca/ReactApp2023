import Card from "./components/Card.jsx";
import Button from "./components/Button/Button.jsx";
import List from "./components/List.jsx";
import ListTech from "./components/ListTechs.jsx";

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return <section id="myWorks" className="cardWrapper">{children}</section>;
}

function Body() {
  const techs = [
    { id: 1, name: "HTML", uses: "Front-End" },
    { id: 2, name: "CSS", uses: "Front-End" },
    { id: 3, name: "JavaScript", uses: "Front-End" },
    { id: 4, name: "Wordpress", uses: "Front-End" },
    { id: 5, name: "Responsive Web Design", uses: "Front-End" },
    { id: 6, name: "GIT", uses: "Back-End"},
    { id: 7, name: "Search Engine Optimization", uses:"Marketing"},
    { id: 8, name: "PHP", uses: "Back-End" },
    { id: 9, name: "Golang", uses: "Back-End" },
    { id: 10, name: "React.js", uses: "Front-End" },
    { id: 11, name: "Java", uses: "Back-End" },
    { id: 12, name: "IT Operations", uses: "Operations" },
    { id: 13, name: "AJAX", uses: "Front-End" },
    { id: 14, name: "Customer Service", uses: "Operations" },
    { id: 15, name: "Software Documentation"},
    { id: 16, name: "PostgreSQL", uses: "Back-End" },
    { id: 17, name: "MongoDB", uses: "Back-End" },
    { id: 18, name: "Python", uses: "Back-End" },
    { id: 19, name: "Bootstrap", uses: "Front-End" },
    { id: 20, name: "Content Management System" },
    { id: 21, name: "Vue.js", uses: "Front-End" },
    { id: 22, name: "Customer Service", uses: "Operations" },
    { id: 23, name: "SASS", uses: "Front-End" },
    { id: 24, name: "JSON", uses: "Back-End" },
    { id: 25, name: "Web Applications", uses: "Full Stack Development" },
    { id: 26, name: "Tailwind", uses: "Front-End" },
    { id: 27, name: "Data Analytics", uses: "Operations"  },
    { id: 28, name: "C#", uses: "Back-End" },
    { id: 29, name: "Unity 3D", uses: "Game dev platform" },
  ];

  return (
    <>
      <Button></Button>
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
