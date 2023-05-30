function getDogImage() {
    let image = document.getElementById("image");
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
                image.innerHTML = `<img src="${data.message}">`;
        })

        // .then(response => response.json())
        // .then((json) => console.log(json))
    // .then(response  =>  console.log(response)) 
    //   console.log(response)
    // .then(json => image.src = json[0].url)
}

function btnClick() {
    let button = document.getElementById("button")
    button.addEventListener("click", getDogImage())
}

document.addEventListener("click", () => {
    getDogImage();
    btnClick();
})
