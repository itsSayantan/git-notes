/**
 * commandList is an object where key is the mainCommand and value is an object (commandObject)
 * commandObject is an object where key is commandArgumentsList.
 * the corresponding value of commandArgumentsList key is: <description_of_the_argument>
 *
 */

const commandsList = {
    'create': {
        commandArgumentsList: {}
    },
    delete: {
        commandArgumentsList: {
            journalID: 'ID of the journal being deleted.'
        }
    },
    deleteall: {
        commandArgumentsList: {}
    },
    'exit': {
        commandArgumentsList: {}
    },
    get: {
        commandArgumentsList: {
            journalID: 'ID of the journal being searched.'
        }
    },
    getall: {
        commandArgumentsList: {}
    },
    help: {
        commandArgumentsList: {}
    },
    resetapp: {
        commandArgumentsList: {}
    },
}

module.exports = {
    commandsList,
}