import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Workspace from './components/Workspace';
import { NotesContextProvider } from './context/NotesContext';

const App = () => {
  return (
    <NotesContextProvider>
      <div className='w-screen h-screen flex flex-col'>
        <Toolbar />
        <div className='w-full flex flex-1'>
          <Sidebar />
          <Workspace />
        </div>
      </div>
    </NotesContextProvider>
  );
};

export default App;
