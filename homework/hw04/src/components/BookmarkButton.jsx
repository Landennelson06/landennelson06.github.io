import React from 'react';
import { postDataToServer, deleteDataFromServer }  from "../server-requests"; 

export default function BookmarkButton({ item, token, redraw }) {
    const bookmarkId = item.current_user_bookmark_id;

    async function toggleBookmark() {
        if (bookmarkId) {
            const url = `/api/bookmarks/${bookmarkId}`;
            await deleteDataFromServer(token, url);
        } else {
            const url = `/api/bookmarks`;
            const postData = { post_id: item.id };
            await postDataToServer(token, url, postData);
        }
        redraw();
    }

    return (
        <button 
            onClick={toggleBookmark} 
            className="hover:text-gray-600 transition-colors"
            aria-label={bookmarkId ? "Un-bookmark" : "Bookmark"}
        >
            <i className={bookmarkId ? "fa-solid fa-bookmark" : "far fa-bookmark"}></i>
        </button>
    );
}