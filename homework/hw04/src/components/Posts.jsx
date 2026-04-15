import React, { useState, useEffect } from "react";
import { deleteDataFromServer, getDataFromServer, postDataToServer } from "../server-requests";

export default function Posts({ token }) {
    const [posts, setPosts] = useState([]);
    const [book, setBook] = useState([]);

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        console.log(data);
        setPosts(data);
    }

    async function getBookmarks(){
        const data = await getDataFromServer(token, "/api/bookmarks");
        console.log(data);
        setBook(data);
    }

    async function setBookmark(id){
        if(book.some((val)=>val.post.id == id)){
            deleteDataFromServer(token, "/api/bookmarks/" + book.find(item => item.post.id === id).id)
        }else{
            postDataToServer(token,"/api/bookmarks/", {"post_id" : id})
        }
    }

    useEffect(() => {
        getPosts();
        getBookmarks();
    }, []);

    return <div>
        {posts.map((item)=>{
            return (<div style={{border: "solid 1px #dbdbdb",marginBottom: "30px", backgroundColor: "#fff",width: "50vw", minWidth: "540px"}} key={item.id}>
                <div>{item.user.username}</div>
                <img src={item.image_url} className="w-max"></img>
                <div className="flex flex-row">
                        <button><i className="far fa-heart"></i></button>
                        <button><i className="far fa-comment"></i></button>
                        <button><i className="far fa-paper-plane"></i></button>
                        {book.some((val)=>val.post.id == item.id) ? <button onClick={()=> setBookmark(item.id)}><i className="fa-solid fa-bookmark"></i></button> : <button onClick={()=> setBookmark(item.id)}><i className="far fa-bookmark"></i></button>}
                        
                </div>
                <div>{item.likes.length} Likes</div>
                <div>{item.display_time}</div>
                { item.comments.map((comment)=>{
                    return (
                        <div>{comment.text}</div>
                    )
                })}
            </div>)
        })}
    </div>;
}
