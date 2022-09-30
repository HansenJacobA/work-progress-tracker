import { LowSync, JSONFileSync } from 'lowdb';

const db = new LowSync(new JSONFileSync('src/db/db.json'));
db.read()
db.write();

import entryModel from './entry.js';
import topicModel from './topic.js';

export default {
  Entry: entryModel(db),
  Topic: topicModel(db)
};
