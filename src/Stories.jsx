import User from "./User";
import {data as storiesJSON} from "./stories.json";


function callStories() {
    return storiesJSON.map((element) => {
        return (
            <div className="story" key = {element.id}>
                <User  name = {element.name} img = {element.img} alt = {element.alt} />
            </div>
        )
    })  

}

export default function Stories() {
    return( 
        <section className="stories">
            <div className="slider">
                {    
                    callStories() 
                }     
                <div className="setinha--right">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
                <div className="setinha--left hidden">
                    <ion-icon name="chevron-back-circle"></ion-icon>
                </div>
            </div>

        </section>
    )
}




