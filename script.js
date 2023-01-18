const hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                    'a', 'b', 'c', 'd', 'e', 'f']
let first = ""
let second = ""

// random integer generation
function randomInt() {
    return Math.floor(Math.random() * hexNumbers.length)
}

// random 6 digit hex color code generation, sets the style background to the random hex
function randomHex() {
    first = ""
    second = ""

    for (let i = 0; i < 6; i++) {
        first += hexNumbers[(randomInt())]
        second += hexNumbers[(randomInt())]
    }

    document.body.style.background = `linear-gradient(to right, #${first}, #${second})` 
    document.querySelector("#first").innerHTML = first
    document.querySelector("#second").innerHTML = second
}


// finding the "generate" id and adding event listener
document.querySelector("#generate").addEventListener("click", () => {
    randomHex()
})

