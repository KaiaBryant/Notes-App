
const notes = require('./notes.js')
const yargs = require('yargs');
const chalk = require('chalk')


// Customize yargs version
yargs.version('1.1.0')

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //     console.log('Title: ' + argv.title)
        //     console.log('Body: ' + argv.body)
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        notes.listNotes
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})





yargs.parse()


// ----- ADD/REMOVE -----------
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('removing note!')
// }

// ------- CHALK -------------
// const message = getNotes()
// console.log(message)

// const greenMessage = chalk.green.bold('Success')
// console.log(greenMessage)


// console.log(process.argv) 