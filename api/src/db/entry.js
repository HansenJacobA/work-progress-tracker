import { nanoid } from 'nanoid'

const entryModel = db => {
    return {
        findMany(filter) {
            return db.get('entry')
                .filter(filter)
                .value()
        },

        findOne(filter) {
            return db.get('entry')
                .find(filter)
                .value()
        },

        create(entry) {
            const newEntry = { id: nanoid(), createdAt: Date.now(), ...entry }

            db.get('entry')
                .push(newEntry)
                .write()

            return newEntry
        }
    }
}

export default entryModel
