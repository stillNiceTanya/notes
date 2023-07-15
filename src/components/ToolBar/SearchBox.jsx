import { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { NotesContext } from '../../context/NotesContext';

const SearchBox = () => {
  const { searchTerm, handleSearch } = useContext(NotesContext);

  return (
    <div className='relative w-56 h-8'>
      <span className='absolute flex items-center left-2 top-1/2 transform -translate-y-1/2'>
        <FaSearch className='w-4 h-4 text-gray-400' />
      </span>
      <input
        type='text'
        className='w-full pl-8 pr-2 py-2 h-full rounded border border-gray-300 focus:outline-none focus:border-blue-500'
        placeholder='Поиск...'
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
