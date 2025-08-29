const fs = require('fs') //built in file system to read and write files
const chalk = require('chalk') // package to add colors and styles to console log

const getNotes = () => {
    return 'Your notes...'
}


// add notes from notes.json
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)


    if (!duplicateNote) { // check for duplicates
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

//remove note
//loads notes by finding title to remove
const removeNote = (title) => {
    const notes = loadNotes()
    // method filters the notes with the given title. We want to know if arrays legnth shrinks, 
    //a note was removed and otherwise, a matching note was found
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

// list notes 
const listNotes = () => {
    const notes = loadNotes() // load in notes

    console.log(chalk.inverse('Your notes'))

    notes.foreach((note) => { // loop through notes and print out the title
        console.log(note.title)
    })
}


//read note by seaching for title if foiund print note, if not print error
const readNote = (title) => {
    const notes = loadNotes() // load in notes
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

//save notes 
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) // taking notes array and convert to JSON
    fs.writeFileSync('notes.json', dataJSON) // save the notes in notes.json as dataJSON format above
}


//load notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') // read notes
        const dataJSON = dataBuffer.toString() // convert buffer to string
        return JSON.parse(dataJSON) // return as parsed data/Objects
    } catch (e) { // if file does not exists return and empty array
        return []
    }
}

// Exports to make functions available to other files
module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}