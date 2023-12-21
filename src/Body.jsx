function Body(){
    const visitor = "visitor";
    const employer = "professional";
    const friend = "friend";
    return(
        <ul>
            <li>{visitor}</li>
            <li>{employer}</li>
            <li>{friend.toUpperCase()}</li>
        </ul>
    );
}
export default Body