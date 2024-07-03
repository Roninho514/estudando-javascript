const getData = async() => {
    try{
        const response = await postsFetch.get("/users", {
            headers: {
                "Content-Type": "application/json",
            }
        });
       return response.data; 
    }
    catch (error) {
        console.log(error);
    }
}

const container = document.querySelector("#user-container");

const printData = async() => {
    const data =  await getData();
    data.forEach(user => {
        const div = document.createElement("div");
        const nameElement= document.createElement("h2");
        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        nameElement.textContent = user.name;
        div.appendChild(nameElement);
        div.appendChild(emailElement);
        container.appendChild(div);
    });
}

printData();

const form = document.querySelector("#post-form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    postsFetch.post("/posts", {
        title: title.value , 
        body: body.value, 
        userId: 1
    });
});
