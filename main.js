const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const images = document.querySelector(".gallery")

let currImage = 1
const maxImage = 4

prev.addEventListener("click", () => {
    --currImage
    if(currImage < 1) {
        currImage = maxImage
    }

    let imageString = "images/Band" + currImage + ".png"
    images.setAttribute("src", imageString)
})

next.addEventListener("click", () => {
    ++currImage
    if(currImage > maxImage) {
        currImage = 1
    }

    let imageString = "images/Band" + currImage + ".png"
    images.setAttribute("src", imageString)
})

