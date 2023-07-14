import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      content: '',
    };

    setNotes([newNote, ...notes]);

    localStorage.setItem('notes', JSON.stringify([newNote, ...notes]));
  };

  const deleteNote = () => {
    // Добавить удаление заметки
  };

  const startEditNote = () => {
    if (!selectedNoteId) return;

    setIsEditMode(true);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        startEditNote,
        selectedNote,
        handleSearch,
        searchTerm,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
