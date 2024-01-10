export default function AuthorNameText(){
    const user = { name:'Tibor', surname:"Kopca"};
    return <p className="authorDesc">{user.name} {user.surname}</p>
}