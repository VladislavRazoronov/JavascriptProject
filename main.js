
fetch("https://jsonplaceholder.typicode.com/users"
).then(data => data.json()
).then(function (data){
    let list = document.getElementById("userList");
    for(let user of data){
        let userElement = document.createElement("div");
        userElement.classList.add("user");
        let userID = document.createElement("p");
        let userName = document.createElement("p");
        let viewDetails = document.createElement("button");
        viewDetails.classList.add("userButton");
        userID.innerText = `ID: ${user.id}`;
        userName.innerText = `Name: ${user.name}`;
        viewDetails.innerText = "View user info";
        viewDetails.addEventListener("click",function (event){
            event.preventDefault();
            window.location.replace(`./user-details.html?id=${user.id}`)
        })
        userElement.appendChild(userID);
        userElement.appendChild(userName);
        userElement.appendChild(viewDetails);
        list.appendChild(userElement);
    }
})