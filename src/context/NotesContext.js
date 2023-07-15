import { createContext, useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getNoteTextContent } from '../utils/getNoteTextContent';

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'));

    if (notesFromLocalStorage) {
      setNotes(notesFromLocalStorage);
    }
  }, []);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      content: '',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);

    localStorage.setItem('notes', JSON.stringify([newNote, ...notes]));
  };

  const deleteNote = useCallback(() => {
    if (!selectedNoteId) return;

    const newNotes = notes.filter((note) => note.id !== selectedNoteId);

    setNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(newNotes));

    setSelectedNoteId(null);
  }, [notes, selectedNoteId]);

  const selectNote = (noteId) => {
    if (!noteId) return;

    setSelectedNoteId(noteId);
    setIsEditMode(false);
  };

  const startEditNote = () => {
    if (!selectedNoteId) return;

    setIsEditMode(true);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  const filteredNotes = searchTerm
    ? notes.filter((note) => {
        const noteContent = getNoteTextContent(note.content.toLowerCase());

        return noteContent.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : notes;

  return (
    <NotesContext.Provider
      value={{
        isEditMode,
        filteredNotes,
        selectedNote,
        selectedNoteId,
        addNote,
        deleteNote,
        selectNote,
        startEditNote,
        handleSearch,
        searchTerm,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
