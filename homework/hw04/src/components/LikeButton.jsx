import React from 'react';
import { postDataToServer, deleteDataFromServer } from "../server-requests"; // Adjust path as needed

export default function LikeButton({ item, token, redraw }) {
    const likeId = item.current_user_like_id; 

    async function toggleLike() {
        if (likeId) {
            const url = `/api/likes/${likeId}`;
            await deleteDataFromServer(token, url);
        } else {
            const url = `/api/likes`;
            const postData = { post_id: item.id };
            await postDataToServer(token, url, postData);
        }
        redraw();
    }

    return (
        <button 
            onClick={toggleLike} 
            className="hover:text-red-500 transition-colors"
            aria-label={likeId ? "Unlike" : "Like"}
        >
            <i className={likeId ? "fa-solid fa-heart text-red-500" : "far fa-heart"}></i>
        </button>
    );
}