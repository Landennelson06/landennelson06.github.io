// requires utilities.js to be loaded first:
// included in index.html


const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "lnelso10";   // change to your username :)
let password = "password";

var bookmarks = [];
async function initializeScreen() {
    token = await getToken();
    showNav();
    // invoke all of the Part 1 functions here
    render()
}

function render(){
    getBookmarks(token)
    getPosts(token)
}
async function getToken() {
    return await getAccessToken(rootURL, username, password);
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:
async function getPosts(token) {
    const url = "https://photo-app-secured.herokuapp.com/api/posts/?limit=3";
    const response = await fetch(url,   
      {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    console.log(data);

    var posts = document.querySelector("#posts")
    posts.innerHTML = "";
    for(item of data){
        var bookmarkHTML;
        var bookmarkMatch = bookmarks.find((obj) => obj.post.id == item.id)
        if(bookmarkMatch){
            bookmarkHTML = `<button onclick="remBookmark(${bookmarkMatch.id})"><i class="far fa-solid fa-bookmark"></i></button>`
        }else{
            bookmarkHTML = `<button onclick="postBookmarkMethod(${item.id})"><i class="far fa-bookmark"></i></button>`
        }
        var comments = ''
        for(comment of item.comments){
            comments += `<p class="text-sm mb-3">
                    <strong>${comment.user.username}</strong>
                    ${comment.text}
                </p>`
        }
        posts.innerHTML += `
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${item.user.username}</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${item.image_url}" alt="${item.alt_text}" width="300" height="300"
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        <button><i class="far fa-heart"></i></button>
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${bookmarkHTML}
                    </div>
                </div>
                <p class="font-bold mb-3">30 likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${item.user.username}</strong>
                        ${item.caption} ...<button class="button">more</button>
                    </p>
                </div>
                ${comments}
                <p class="uppercase text-gray-500 text-xs">1 day ago</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
        `
    }
}
async function getBookmarks(token){
    const url = "https://photo-app-secured.herokuapp.com/api/bookmarks/";
    const response = await fetch(url,   
      {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    console.log(data);

    bookmarks = data;
}

async function remBookmark(id){
    const url = "https://photo-app-secured.herokuapp.com/api/bookmarks/" + id;
    const response = await fetch(url,   
      {
        method: "delete",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });
    const data = await response.json();
    console.log(data);
    render()
}

async function postBookmarkMethod(id){
    const url = "https://photo-app-secured.herokuapp.com/api/bookmarks/";
    const response = await fetch(url,   
      {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body:JSON.stringify({
           "post_id": id 
        })
    });
    const data = await response.json();
    render()
}

// after all of the functions are defined, 
// invoke initialize at the bottom:
initializeScreen();
