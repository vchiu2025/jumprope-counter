let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

let bestEl = document.getElementById("best-el")

let totalEl = document.getElementById("total-el")

function increment() {
    count += 1
    countEl.innerText = count
}

let jumpCounts = []
let total = 0

function save() {
    jumpCounts.push(count)
    total += count
    let entryDisplay = ' ' + count + ' - '
    saveEl.innerText += entryDisplay
    count = 0
    countEl.innerText = count
    console.log(jumpCounts)
    bestEl.textContent = "Personal best: " + Math.max(...jumpCounts)
    totalEl.textContent = "Total: " + total
}

function reset() {
    count = 0
    total = 0
    jumpCounts = []
    saveEl.innerText = 'Previous attempts:'
    bestEl.textContent = "Personal best: 0"
    countEl.innerText = count
    totalEl.textContent = "Total: " + total
}