import {data as usersJSON} from "./users.json"

export default function SideBar() {
    return (
        <div className="sidebar">
            {
                ActiveUser()
            }

            <div className="sugestoes">
                <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>
            {
                Suggestion()
            }

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>

            </div>
        </div>
    )
}


function Suggestion(){
    return usersJSON.map((element, index)=>{
        if(element.user.isActiveUser === false) {
            return(
                <div className="sugestao" key = {index} >
                    <div className="usuario">
                    <img src={element.user.avatar[0]} alt = {element.user.avatar[1]} />
                    <div className="texto">
                        <div className="nome">{element.user.name}</div>
                        <div className="razao">{element.user.suggestionDue}</div>
                    </div>
                    </div>
        
                    <div className="seguir">Seguir</div>
                </div>
            )
        }
        
    })


}

function ActiveUser(){
    const activeUser = usersJSON.filter(element=>{
        if (element.user.isActiveUser) {
            return true
        } else {
            return false
        }
    })
    return (
    
        <div className="usuario">
            <img src={activeUser[0].user.avatar[0]} alt = {activeUser[0].user.avatar[1]}/>
            <div className="texto">
            <strong>{activeUser[0].user.name}</strong>
            {activeUser[0].user.profileName}
            </div>
        </div>
        
    )
}