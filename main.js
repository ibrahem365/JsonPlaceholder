// XHR Request , Start
// function getPosts(userId) {
//     let request = new XMLHttpRequest();
//     request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//     request.responseType = "json";
//     request.send();
//     request.onload = function () {
//         if (request.status >= 200 && request.status < 300) {
//             let posts = request.response;

// document.getElementById("posts").innerHTML = "";
// for (post of posts) {
//     let content = `
//     <div id="post">
//         <h3>${post.title}</h3>
//         <h4>${post.body}</h4>
//     </div>
//     `
//     document.getElementById("posts").innerHTML += content;
//             }
//         } else {
//             console.log("error");
//         }
//     }
// }

// function getUsers() {
//     let request = new XMLHttpRequest();
//     request.open("GET", "https://jsonplaceholder.typicode.com/users");
//     request.responseType = "json";
//     request.send();
//     request.onload = function () {
//         if (request.status >= 200 && request.status < 300) {
//             let users = request.response;

// document.getElementById("users").innerHTML = "";
// for (user of users) {
//     let content = `
//     <div id="user" onclick="userClicked(${user.id}, this)">
//         <h3>${user.name}</h3>
//         <h3>${user.email}</h3>
//     </div>
//     `
//     document.getElementById("users").innerHTML += content;
// }
//         } else {
//             console.log("error");
//         }
//     }
// }

// getUsers();
// getPosts(1);

// function userClicked(userId, ele) {
//     getPosts(userId);

//     let selectedEle = document.getElementsByClassName("selected");
//     for (el of selectedEle) {
//         el.classList.remove("selected")
//     }

//     ele.classList.add("selected");
// }
// XHR Request , End


//Fetch Request , Start
function getUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.ok ? response.json() : reject("error with request"))
            .then((users) => {

                document.getElementById("users").innerHTML = "";
                for (user of users) {
                    let content = `
                <div id="user" onclick="userClicked(${user.id}, this)">
                    <h3>${user.name}</h3>
                    <h3>${user.email}</h3>
                </div>
                `
                    document.getElementById("users").innerHTML += content;
                }

                resolve();
            });
    })
}



function getPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.ok ? response.json() : console.log("error"))
        .then((posts) => {

            document.getElementById("posts").innerHTML = "";
            for (post of posts) {
                let content = `
                <div id="post">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                </div>
                `
                document.getElementById("posts").innerHTML += content;
            }
        });
}

getUsers()
    .then(() => {
        getPosts(1);
    })
    .catch((erMes) => {
        console.log(erMes);
    });

function userClicked(userId, ele) {
    getPosts(userId);

    let selectedEle = document.getElementsByClassName("selected");
    for (el of selectedEle) {
        el.classList.remove("selected")
    }

    ele.classList.add("selected");
}

//Fetch Request , End
