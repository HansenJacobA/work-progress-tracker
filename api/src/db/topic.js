import { nanoid } from 'nanoid';

const topicModel = db => {
    return {

        findOne(selectedId) {
            return db.data.topic.find(({ id }) => id === selectedId);
        },

        findAll() {
            return db.data.topic;
        },

        create(topic) {

            const newTopic = { id: nanoid(), createdAt: new Date().toLocaleString(), ...topic };

            db.data.topic.push(newTopic);

            db.write();

            return newTopic;
        }
    };
};

export default topicModel;
