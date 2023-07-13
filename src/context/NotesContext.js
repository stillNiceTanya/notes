import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NotesContext = createContext();

const mockNotes = [
  {
    id: uuidv4(),
    content: 'This is a note!',
  },
];

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(mockNotes);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      content: '',
    };

    setNotes([newNote, ...notes]);

    localStorage.setItem('notes', JSON.stringify([newNote, ...notes]));
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
