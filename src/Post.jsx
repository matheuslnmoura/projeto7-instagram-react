import User from "./User";

export default function Post(props) {
    return(
        <div className="post" key = {props.keyNumber}>
            <div className="topo">
                <User name = {props.name} img = {props.userImg} alt = {props.alt} />
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
        
            </div>

            <div className="conteudo">
                
                {verifyContentType(props.postContentType, props.postContent, props.postContentMP4, props.postContentOGV)}
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="assets/img/respondeai.svg" alt="Responde Aí Logo"/>
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}



function verifyContentType(contentType, postContent, postContentMP4, postContentOGV) {
    if (contentType === "img") {
        
        return(
            <img src= {postContent} />
        )
    } else {
        return(
            <video autoPlay muted loop controls poster="">
                <source src={postContentMP4} type="video/mp4" />
                <source src={postContentOGV} type="video/ogv" />
            </video>
        )
    }
}
