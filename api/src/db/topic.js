import { nanoid } from 'nanoid'

const topicModel = db => {
    return {

        findOne(filter) {
            return db.get('topic')
                .find(filter)
                .value()
        },

        create(topic) {
            const newTopic = { id: nanoid(), createdAt: Date.now(), ...topic }
            db.get('topic')
                .push(newTopic)
                .write()

            return newTopic
        }
    }
}

export default topicModel
