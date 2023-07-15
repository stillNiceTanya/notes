import NoteList from './NoteList';

const SideBar = () => (
  <div className='w-full h-1/3 sm:w-1/4 sm:h-full sm:max-h-full sm:max-w-xs border-b sm:border-b-0 sm:border-r overflow-y-auto'>
    <NoteList />
  </div>
);

export default SideBar;
