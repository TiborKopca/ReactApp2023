function Logo(){
    return(
        <img 
            className="logoAvatar"
            src="https://avatars.githubusercontent.com/u/49275231?v=4"
            alt="Logo Avatar"
            width={100}
            height={100}
        />
    )
}

export default function Logotype(){
    return(
        <Logo
            // person={{name:'Tibor Kopca',imageId:'1'}}
            // size={100}
        ></Logo>
    );
}