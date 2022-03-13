export default function User(props) {
    return(
        <div className="user-container">
            <div className="imagem">
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className="usuario">
                {props.name}
            </div>
        </div>

    )
}