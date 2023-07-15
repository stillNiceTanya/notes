import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className='relative'>
      <span className='absolute flex items-center left-2 top-1/2 transform -translate-y-1/2'>
        <FaSearch className='w-4 h-4 text-gray-400' />
      </span>
      <input
        type='text'
        className='w-full max-w-56 h-8 pl-8 pr-2 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
        placeholder='Поиск...'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
