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

            const newEntry = { id: nanoid(), createdAt: new Date().toLocaleString(), ...entry.data };

            db.data.entry.unshift(newEntry);

            db.write();

            return newEntry;
        }
    }
}

export default entryModel;
