let noteArray = [ 
    {title: "note one", body: "some text 1"},
    {title: "note two", body: "some text 2"}
]

function darkTheme() {

    const mainHeading = document.querySelector('header')
    const mainNav = document.querySelector('nav')
    const mainMain = document.querySelector('main')
    const mainFooter = document.querySelector('footer')
    const mainTag = document.querySelector('.theme');

    if (mainTag.textContent == 'Dark Theme'){

        mainHeading.style.backgroundColor = '#545454'
        mainHeading.style.color = 'white'

        mainNav.style.backgroundColor = '#636363'
        mainNav.style.color = 'white'

        mainMain.style.backgroundColor = '#515151'

        mainFooter.style.backgroundColor = '#545454'
        mainFooter.style.color = 'white'

        mainTag.textContent = 'Light Theme';

    } else {
        mainHeading.style.backgroundColor = '#977E7F'
        mainHeading.style.color = 'black'

        mainNav.style.backgroundColor = '#C0C0C0'
        mainNav.style.color = 'black'

        mainMain.style.backgroundColor = '#ECE8E8'

        mainFooter.style.backgroundColor = '#DFBCB8'
        mainFooter.style.color = 'black'

        mainTag.textContent = 'Dark Theme';

    }

}


function newNote() {
    const cancelButton = document.querySelector(".cancel")
    const saveButton = document.querySelector(".save")
    const note = document.querySelector(".notes")

    cancelButton.style.display = "inline-block"
    saveButton.style.display = "inline-block"
    note.style.display = "inline-block"

    document.querySelector("textarea").value = ""
}


function cancelButton() {
    const cancelButton = document.querySelector(".cancel")
    const saveButton = document.querySelector(".save")
    const note = document.querySelector(".notes")

    cancelButton.style.display = "none"
    saveButton.style.display = "none"
    note.style.display = "none"
    
}


