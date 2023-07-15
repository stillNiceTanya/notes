import { useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa';
import ToolbarButton from './ToolbarButton';
import SearchBox from './SearchBox';

const ToolBar = () => {
  const {
    addNote,
    deleteNote,
    handleSearch,
    searchTerm,
    selectedNote,
    startEditNote,
  } = useContext(NotesContext);

  const confirmDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту заметку?')) {
      deleteNote();
    }
  };

  return (
    <div className='flex items-center flex-none gap-4 w-full h-12 px-4 bg-gray-200'>
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
      <div className='flex justify-end flex-1'>
        <SearchBox
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default ToolBar;
