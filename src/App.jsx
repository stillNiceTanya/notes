import { SideBar, ToolBar, Workspace } from './components';
import { NotesContextProvider } from './context/NotesContext';

const App = () => {
  return (
    <NotesContextProvider>
      <div className='w-screen h-screen flex flex-col'>
        <ToolBar />
        <div className='w-full flex flex-1'>
          <SideBar />
          <Workspace />
        </div>
      </div>
    </NotesContextProvider>
  );
};

export default App;
