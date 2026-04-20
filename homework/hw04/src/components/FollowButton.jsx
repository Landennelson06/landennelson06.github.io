import React from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function FollowButton({ user, token, redraw }) {
    const followingId = user.current_user_following_id;

    async function toggleFollow() {
        if (followingId) {
            const url = `/api/following/${followingId}`;
            await deleteDataFromServer(token, url);
        } else {
            const url = `/api/following`;
            const postData = { user_id: user.id };
            await postDataToServer(token, url, postData);
        }
        redraw(); 
    }

    return (
        <button 
            onClick={toggleFollow}
            className={`text-sm font-bold transition-colors ${
                followingId ? "text-black" : "text-blue-500 hover:text-blue-700"
            }`}
        >
            {followingId ? "Following" : "Follow"}
        </button>
    );
}