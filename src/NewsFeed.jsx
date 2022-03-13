import Post from "./Post"
import {data as postsJSON} from "./posts.json"



export default function NewsFeed() {
    return(
        <section className="posts">
            {
                renderPosts()
            }

        </section>
    )
}

function renderPosts() {
    return postsJSON.map((element, index) =>{
   
       return <Post
       keyNumber = {index}
       name = {element.user.name} 
       userImg = {element.user.avatar[0]} 
       alt = {element.user.avatar[1]} 
       postContentType = {element.post.contentType}
       postContent = {element.post.content}
       postContentAlt = {element.post.alt}
       postContentMP4 = {element.post.content.mp4}
       postContentOGV = {element.post.content.ogv}
       />
        
    })
}

