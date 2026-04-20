import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import AddComment from "./AddComment";
import FollowButton from "./FollowButton";

export default function Post({ token, item, book, setBookmark }) {
  if (!item) return null;
  const [refreshTick, setRefreshTick] = useState(0);
  const redraw = () => setRefreshTick((prev) => prev + 1);
  const isBookmarked = book?.some((val) => val.post.id === item.id);

  return (
    <section className="bg-white border border-[#dbdbdb] mb-[30px] w-[50vw] min-w-[540px] flex flex-col">
      <div className="flex justify-between items-center px-4 py-3">
        <h3 className="font-bold text-sm">{item.user?.username}</h3>
        <div className="">
            <FollowButton user={item.user} token={token} redraw={redraw} />
        <button>
          <i className="px-4 fa-solid fa-ellipsis"></i>
        </button>
        </div>
      </div>

      <img
        src={item.image_url}
        alt={`Posted by ${item.user?.username}`}
        className="w-full h-auto object-cover border-y border-[#efefef]"
      />

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center mb-1">
          <div className="flex gap-4 text-2xl">
            <LikeButton item={item} token={token} redraw={redraw} />
            <button className="hover:text-gray-500 transition-colors">
              <i className="far fa-comment"></i>
            </button>
            <button className="hover:text-gray-500 transition-colors">
              <i className="far fa-paper-plane"></i>
            </button>
          </div>
          <BookmarkButton item={item} token={token} redraw={redraw} />
        </div>

        <p className="font-bold text-sm">{item.likes?.length || 0} likes</p>

        <div className="text-sm">
          <span className="font-bold mr-2">{item.user?.username}</span>
          <span>{item.caption || "No caption provided"}</span>
        </div>

        <p className="text-[10px] uppercase text-gray-400 tracking-wide mt-1">
          {item.display_time}
        </p>

        <div className="mt-2 space-y-1">
          {item.comments?.length > 0 && (
            <button className="text-gray-500 text-sm block mb-2">
              View all {item.comments.length} comments
            </button>
          )}
          {item.comments?.slice(0, 2).map((comment, index) => (
            <div key={index} className="text-sm">
              <span className="font-bold mr-2">
                {comment.username || "user"}
              </span>
              {comment.text}
            </div>
          ))}
        </div>
      </div>

      <AddComment item={item} token={token} requeryPost={redraw}/>
    </section>
  );
}
