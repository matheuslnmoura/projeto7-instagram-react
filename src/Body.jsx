import Stories from "./Stories"
import NewsFeed from "./NewsFeed"
import SideBar from "./SideBar"

export default function Body() {
    return(
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <NewsFeed />
            </div>
            <SideBar />
        </div>
    )

}