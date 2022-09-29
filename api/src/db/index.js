import { LowSync, JSONFileSync } from 'lowdb'

const db = new LowSync(new JSONFileSync('api/src/db/db.json'))

import entryModel from './entry.js'
import topicModel from './topic.js'

export default {
  Entry: entryModel(db),
  Topic: topicModel(db)
}
