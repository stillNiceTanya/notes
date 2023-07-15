import { useContext } from 'react';
import NoteItem from './NoteItem';
import { NotesContext } from '../../context/NotesContext';
import NoNotesPlaceholder from './NoNotesPlaceholder';

const NoteList = () => {
  const { filteredNotes } = useContext(NotesContext);
  const hasNotes = filteredNotes.length > 0;

  if (!hasNotes) {
    return <NoNotesPlaceholder />;
  }

  return (
    <ul className='flex flex-col w-full h-full'>
      {filteredNotes.map((note) => (
        <li
          key={note.id}
          className='border-b'
        >
          <NoteItem note={note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
