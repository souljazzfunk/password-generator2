const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const letters = characters.filter((char) => /^[a-zA-Z]$/.test(char))
const numbers = characters.filter((char) => /^[0-9]$/.test(char))
const symbols = characters.filter((char) => /[^a-zA-Z0-9]$/.test(char))

const incNums = document.getElementById("include-numbers")
const incSyms = document.getElementById("include-symbols")
const pw1Elem = document.getElementById("passwd1")
const pw2Elem = document.getElementById("passwd2")
const guideElem = document.getElementById("passwd-guide-wrapper")
const guide1Elem = document.getElementById("guide1")
const guide2Elem = document.getElementById("guide2")

document.getElementById("btn").addEventListener("click", () => {
    const length = document.getElementById("passwd-length").value
    pw1Elem.textContent = genPasswd(length)
    pw2Elem.textContent = genPasswd(length)
    guide1Elem.textContent = "↑Click to copy"
    guide2Elem.textContent = "↑Click to copy"
    fadeIn()
})

pw1Elem.addEventListener("click", () => {
    navigator.clipboard.writeText(pw1Elem.textContent)
    guide1Elem.textContent = "Copied!"
})

pw2Elem.addEventListener("click", () => {
    navigator.clipboard.writeText(pw2Elem.textContent)
    guide2Elem.textContent = "Copied!"
})

function genPasswd(length) {
    const chars = selectChars()
    let passwd = ""
    for (let i=0; i<length; i++) {
        passwd += chars[Math.floor(Math.random() * chars.length)]
    }
    return passwd
}

function selectChars() {
    let chars = letters
    if (incNums.checked && incSyms.checked) {
        chars = characters
    }
    else if (incNums.checked) {
        chars = chars.concat(numbers)
    }
    else if (incSyms.checked) {
        chars = chars.concat(symbols)
    }
    return chars
}

function fadeIn() {
    guideElem.classList.remove("invisible")
    guideElem.classList.remove("fade-out")
    guideElem.classList.add("fade-in")
}
