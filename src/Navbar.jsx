export default function Navbar() {
    return(
        <header className="navbar">
            <div className="container">
                <div className="logo">
                    <Icons name="logo-instagram" />
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="Instagram logo - desktop version"/>
                </div>

                <div className="logo-mobile">
                    <Icons name="logo-instagram" />
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" alt="Instagram logo - mobile version"/>
                </div>
        
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <nav className="icones">
                    <ul>
                        <li><Icons name="paper-plane-outline" /></li>
                        <li><Icons name="compass-outline" /></li>
                        <li><Icons name="heart-outline" /></li>
                        <li><Icons name="person-outline" /></li>
                    </ul>
                </nav>

                <div className="icones-mobile">
                    <Icons name="paper-plane-outline"/>
                </div>
            </div>
      </header>
    )
}


function Icons(props) {
    return(
        <ion-icon name={props.name}></ion-icon>
    )
}