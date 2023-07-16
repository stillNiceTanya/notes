import Dexie from 'dexie';

const db = new Dexie('NotesDB');

db.version(1).stores({
  notes: '++id, content, lastModified',
});

export default db;
