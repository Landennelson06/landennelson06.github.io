import React, { useState, useEffect } from "react";
import { deleteDataFromServer, getDataFromServer, postDataToServer } from "../server-requests";
import Post from "./Post";
export default function Posts({ token }) {
    const [posts, setPosts] = useState([]);
    const [book, setBook] = useState([]);

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        setPosts(data);
    }

    async function getBookmarks(){
        const data = await getDataFromServer(token, "/api/bookmarks");
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
            return (<Post token={token} item={item} book={book} setBookmark={setBook}/>)
        })}
    </div>;
}
