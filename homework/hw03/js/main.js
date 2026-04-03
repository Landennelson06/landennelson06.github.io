// requires utilities.js to be loaded first:
// included in index.html

const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "lnelso10";   // change to your username :)
let password = "password";

var bookmarks = [];

async function initializeScreen() {
    token = await getToken();
    showUser();
    showSugg()
    showNav();
    showStories();
    render();
}

function render() {
    getBookmarks(token);
    getPosts(token);
}

async function getToken() {
    return await getAccessToken(rootURL, username, password);
}
async function showUser(){
    const url = `${rootURL}/api/profile`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    document.querySelector("#user img").src = data.image_url
    document.querySelector("#user h2").innerHTML = data.username
}

async function showSugg(){
    const url = `${rootURL}/api/suggestions`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    console.log(data);

    document.querySelector("#sugg").innerHTML = "";

    var suggFinal = ""
    for(item of data){
        suggFinal += `
         <section class="flex justify-between items-center mb-4 gap-2">
                <img src="${item.image_url}" class="rounded-full" style="width:40px;height:40px"/>
                <div class="w-[180px]">
                    <p class="font-bold text-sm">${item.username}</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>`
    }

    document.querySelector("#sugg").innerHTML = suggFinal;
}

async function showStories() {
    const url = `${rootURL}/api/stories`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    
    const container = document.querySelector("#stories");
    container.innerHTML = ""; 

    for (const item of data) {
        container.innerHTML += `
            <div class="flex flex-col justify-center items-center flex-shrink-0">
                <img src="${item.user.image_url}" 
                     class="rounded-full border-4 border-gray-300 w-[50px] h-[50px]" 
                     alt="Story by ${item.user.username}" />
                <p class="text-xs text-gray-500">${item.user.username}</p>
            </div>
        `;
    }
}
function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0 z-10">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

async function getPosts(token) {
    const url = `${rootURL}/api/posts/?limit=10`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();

    const postsContainer = document.querySelector("#posts");
    postsContainer.innerHTML = "";

    for (const item of data) {
        let bookmarkHTML;
        const bookmarkMatch = bookmarks.find((obj) => obj.post.id == item.id);
        if (bookmarkMatch) {
            bookmarkHTML = `<button onclick="unbookmark(${bookmarkMatch.id})" aria-label="Unbookmark"><i class="fas fa-bookmark"></i></button>`;
        } else {
            bookmarkHTML = `<button onclick="bookmark(${item.id})" aria-label="Bookmark"><i class="far fa-bookmark"></i></button>`;
        }

        let likeHTML;
        if (item.current_user_like_id) {
            likeHTML = `<button onclick="unlike(${item.current_user_like_id})" aria-label="Unlike"><i class="fas fa-heart text-red-700"></i></button>`;
        } else {
            likeHTML = `<button onclick="like(${item.id})" aria-label="Like"><i class="far fa-heart"></i></button>`;
        }

        let commentsHTML = '';
        if (item.comments.length > 1) {
            commentsHTML += `
                <button class="text-gray-500 text-sm mb-2" aria-label="View all ${item.comments.length} comments">
                    View all ${item.comments.length} comments
                </button>`;
        }

        if (item.comments.length > 0) {
            const lastComment = item.comments[item.comments.length - 1];
            commentsHTML += `
                <p class="text-sm mb-1">
                    <strong>${lastComment.user.username}</strong> ${lastComment.text}
                </p>`;
        }

        postsContainer.innerHTML += `
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${item.user.username}</h3>
                <button class="icon-button" aria-label="More options"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${item.image_url}" alt="${item.alt_text || 'Post image'}" class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div class="flex gap-4">
                        ${likeHTML}
                        <button aria-label="Comment"><i class="far fa-comment"></i></button>
                        <button aria-label="Share"><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${bookmarkHTML}
                    </div>
                </div>
                <p class="font-bold mb-3">${item.likes.length} likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${item.user.username}</strong> ${item.caption}
                    </p>
                </div>
                
                <div class="comments-container">
                    ${commentsHTML}
                </div>
                <p class="uppercase text-gray-500 text-xs mt-2">${item.display_time}</p>
            </div>
        </section>
        `;
    }
}
async function getBookmarks(token) {
    const url = `${rootURL}/api/bookmarks/`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    bookmarks = await response.json();
}


async function like(postId) {
    const url = `${rootURL}/api/likes/`;
    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ "post_id": postId })
    });
    render();
}

async function unlike(likeId) {
    const url = `${rootURL}/api/likes/${likeId}`;
    await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    render();
}


async function bookmark(postId) {
    const url = `${rootURL}/api/bookmarks/`;
    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ "post_id": postId })
    });
    render();
}

async function unbookmark(bookmarkId) {
    const url = `${rootURL}/api/bookmarks/${bookmarkId}`;
    await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    render();
}

initializeScreen();