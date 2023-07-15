import { useCallback, useContext } from 'react';
import classNames from 'classnames';

import { NotesContext } from '../../context/NotesContext';
import { getNoteTitle } from '../../utils/getNoteTitle';
import { getFormattedDate } from '../../utils/getFormattedDate';

const NoteItem = ({ note }) => {
  const { selectedNoteId, selectNote } = useContext(NotesContext);

  const isActive = selectedNoteId === note.id;

  const handleNoteSelect = useCallback(() => {
    selectNote(note.id);
  }, [note, selectNote]);

  return (
    <div
      className={classNames(
        'p-4 w-full h-16 sm:h-24',
        isActive ? 'bg-blue-200' : 'bg-gray-100',
        {
          'hover:bg-blue-200 cursor-pointer': !isActive,
        }
      )}
      onClick={handleNoteSelect}
    >
      <h4 className='text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap'>
        {getNoteTitle(note.content)}
      </h4>
      <p className='text-xs'>{getFormattedDate(note.lastModified)}</p>
    </div>
  );
};

export default NoteItem;
