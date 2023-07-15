import { useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa';
import ToolbarButton from './ToolbarButton';
import SearchBox from './SearchBox';

const ToolBar = () => {
  const { addNote, deleteNote, startEditNote, selectedNote } =
    useContext(NotesContext);

  const confirmDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту заметку?')) {
      deleteNote();
    }
  };

  return (
    <div className='flex items-center justify-between flex-none w-full h-12 px-4 bg-gray-200'>
      <div className='flex items-center h-full gap-2'>
        <ToolbarButton
          className='bg-blue-500'
          onClick={addNote}
          title='Создать заметку'
        >
          <FaPlus />
        </ToolbarButton>

        <ToolbarButton
          className='bg-red-500'
          disabled={!selectedNote}
          onClick={confirmDelete}
          title='Удалить заметку'
        >
          <FaTrash />
        </ToolbarButton>

        <ToolbarButton
          className='bg-green-500'
          disabled={!selectedNote}
          onClick={startEditNote}
          title='Редактировать заметку'
        >
          <FaPen />
        </ToolbarButton>
      </div>
      <SearchBox />
    </div>
  );
};

export default ToolBar;
