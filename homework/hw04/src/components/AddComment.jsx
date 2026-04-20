import React, { useState } from "react";
import { postDataToServer } from "../server-requests";

export default function AddComment({ item, token, requeryPost }) {
    const [comment, setComment] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (!comment.trim()) return;

        const url = "/api/comments";
        const postData = {
            post_id: item.id,
            text: comment
        };

        await postDataToServer(token, url, postData);
        setComment(""); 
        requeryPost();  
    }

    return (
        <form className="border-t border-[#efefef] p-4 flex items-center" onSubmit={handleSubmit}>
            <input 
                className="flex-grow text-sm outline-none" 
                placeholder="Add a comment..." 
                type="text" 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button 
                className="text-blue-500 font-bold text-sm ml-2 disabled:opacity-50" 
                type="submit"
                disabled={!comment.trim()}
            >
                Post
            </button>
        </form>
    );
}