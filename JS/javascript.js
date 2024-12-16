const userElm = document.getElementById("name")
const kmElm = document.getElementById("km")
const ageElm = document.getElementById("age")

let offerElm = document.querySelector("offer")
let cabinElm = document.querySelector("cabin")
let opElm = document.querySelector("op")
let priceElm = document.querySelector("price")

const submittedElm = document.getElementById("submitted")
const submitterElm = document.getElementById("submitter")
const undoElm = document.getElementById("undo")


submittedElm.addEventListener("submit", (sub) => {
    sub.preventDefault()

    const randomizer = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const cabinNum = randomizer(9600, 9700)
    const opNum = randomizer(1, 600)
    const userInput = []
    userInput.push(userElm.value)
    userInput.push(kmElm.value)
    userInput.push(ageElm.value)
    userElm.value = ""
    kmElm.value = ""
    ageElm.value = "grown"

    console.log(userInput[0])
    console.log(userInput[1])
    console.log(userInput[2])

    if (userInput[2] === "under_age") {
        priceElm.innerHTML(`${userInput[1] * 0.2}`)
    } else if (userInput[2] === "over_65") {
        priceElm.innerHTML(`${userInput[1] * 0.7}`)
    } else if (userInput[2] === "grown") {
        priceElm.innerHTML("Maggiorenne")
    }

    offerElm.innerHTML(userInput[2])
    cabinElm.innerHTML(cabinNum)
    opElm.innerHTML(opNum)
})


undoElm.addEventListener("click", () => {
    priceElm.innerHTML("")
    offerElm.innerHTML("")
    cabinElm.innerHTML("")
    opElm.innerHTML("")
})