import { nanoid } from 'nanoid';

const entryModel = db => {
    return {
        findMany({ selectedTopic }) {
            return db.data.entry.filter(({ topic }) => topic === selectedTopic);
        },

        findOne({ selectedId }) {
            return db.data.entry.find(({ id }) => id === selectedId);
        },

        create(entry) {

            const newEntry = { id: nanoid(), createdAt: Date.now(), ...entry.data };

            db.data.entry.push(newEntry);

            db.write();

            return newEntry;
        }
    }
}

export default entryModel;
