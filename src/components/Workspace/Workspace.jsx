import { useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';
import { Editor } from './Editor';
import NoSelectedNotePlaceholder from './NoSelectedNotePlaceholder';

const Workspace = () => {
  const { selectedNote } = useContext(NotesContext);

  return (
    <div className='flex-1 overflow-y-auto'>
      {selectedNote ? <Editor /> : <NoSelectedNotePlaceholder />}
    </div>
  );
};

export default Workspace;
