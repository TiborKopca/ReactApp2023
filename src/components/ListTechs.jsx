import propTypes from 'prop-types'
import {techs} from './Data/Data.jsx'

function ListTech(props) {
    const itemslist = props.items;
    const category = props.category; 

//ALPHABETICAL SORT
  itemslist.sort((a,b) => a.name.localeCompare(b.name));

//TESTFILTER
//  const testFilter = itemslist.filter((tech) => tech.name === "HTML");
 
//MAP
  const listTech = itemslist.map((tech) => (
                                            <li key={tech.id} className='listParent'>
                                                <div className='listLeft'><b>{tech.name}</b></div>
                                                <div className='separator'>:</div>
                                                <div className='listRight'>{tech.uses}</div>
                                            </li>
                                ));
 
  return (
    <section id="skillList" className="listSkills">
    <h2>{category} ({techs.length})</h2>
      <ul className='techslist'>{listTech}</ul>
    </section>
  );
}
export default ListTech;

//PROP TYPES DEFINITION
ListTech.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        id:propTypes.number,
        name:propTypes.string,
        uses:propTypes.string
    })),
    category: propTypes.string
}
ListTech.defaultProps = {
    category: "Category-placeholder",
    itemslist:[],
}