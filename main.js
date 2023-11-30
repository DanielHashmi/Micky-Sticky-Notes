
let createNote = document.getElementsByClassName('createNote')[0]
let whiteDiv = document.getElementsByClassName('whiteDiv')[0]
let cross = document.getElementsByClassName('cross')[0]
let check = document.getElementsByClassName('check')[0]
let mainDiv = document.getElementsByClassName('mainDiv')[0]
let allNotes = document.getElementsByClassName('allNotes')[0]
let textArea = document.getElementsByClassName('textArea')[0]
let deleteNotes = document.getElementsByClassName('deleteNotes')[0]
let para = document.getElementsByClassName('para')[0]

createNote.addEventListener('click', () => {
    whiteDiv.style.display = 'block'
})
deleteNotes.addEventListener('click', () => {
    localStorage.clear()
    mainDiv.innerHTML = ''
})

cross.addEventListener('click', () => {
    whiteDiv.style.display = 'none'
})
check.addEventListener('click', () => {

    whiteDiv.style.display = 'none'

    let getData = JSON.parse(localStorage.getItem('data')) || [];

    console.log(getData)
    let object = {
        contant: textArea.value
    }
    getData.push(object)

    localStorage.setItem('data', JSON.stringify(getData))

    randerNotes()
    textArea.value = ''
})

textArea.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        whiteDiv.style.display = 'none'

        let getData = JSON.parse(localStorage.getItem('data')) || [];

        let object = {
            contant: textArea.value
        }
        getData.push(object)

        localStorage.setItem('data', JSON.stringify(getData))

        randerNotes()
        textArea.value = ''
    }
})
function randerNotes() {
    mainDiv.innerHTML = ""

    let getData = JSON.parse(localStorage.getItem('data')) || [];

    getData.forEach(obj => {
        let arrayOfNotes = ["note", "note1", "note2", "note3", "note4"]
        let random = Math.floor(Math.random() * arrayOfNotes.length)

        let allNotes = document.createElement('div')
        let randomNotes = document.createElement('div')
        let h2 = document.createElement('h2')


        allNotes.addEventListener('dblclick', () => {
            getData = getData.filter(object => object !== obj)
            localStorage.setItem('data', JSON.stringify(getData))
            allNotes.remove()
        })
        h2.innerHTML = obj.contant

        randomNotes.className = arrayOfNotes[random]
        allNotes.className = 'allNotes'
        h2.className = 'h2'
        allNotes.appendChild(randomNotes)
        mainDiv.appendChild(allNotes)
        randomNotes.appendChild(h2)

    });
}
randerNotes()