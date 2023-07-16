import { createContext, useState, useCallback, useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { getNoteTextContent } from '../utils/getNoteTextContent';
import { db } from '../db';

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const notes = useLiveQuery(
    async () => {
      return (await db.notes.toArray()).reverse();
    },
    [],
    []
  );

  const addNote = useCallback(async () => {
    try {
      const newNote = {
        content: '',
        lastModified: Date.now(),
      };

      const newNoteId = await db.notes.add(newNote);
      setSelectedNoteId(newNoteId);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const deleteNote = useCallback(async () => {
    if (!selectedNoteId) return;

    try {
      await db.notes.delete(selectedNoteId);
      setSelectedNoteId(null);
    } catch (error) {
      throw new Error(error);
    }
  }, [selectedNoteId]);

  const updateSelectedNote = useCallback(
    async (content) => {
      if (!selectedNoteId) return;

      try {
        await db.notes.update(selectedNoteId, {
          content,
          lastModified: Date.now(),
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    [selectedNoteId]
  );

  const startEditNote = useCallback(() => {
    if (!selectedNoteId) return;

    setIsEditMode(true);
  }, [selectedNoteId]);

  const selectNote = useCallback(
    (noteId) => {
      const note = notes.find((note) => note.id === noteId);

      if (!note) return;

      setSelectedNoteId(note.id);
      setIsEditMode(false);
    },
    [notes]
  );

  const handleSearch = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const filteredNotes = useMemo(() => {
    if (!searchTerm) return notes;

    return notes.filter((note) => {
      const noteContent = getNoteTextContent(note.content.toLowerCase());

      return noteContent.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [notes, searchTerm]);

  const selectedNote = useMemo(() => {
    if (!selectedNoteId) return null;

    return notes.find((note) => note.id === selectedNoteId) ?? null;
  }, [notes, selectedNoteId]);

  return (
    <NotesContext.Provider
      value={{
        isEditMode,
        selectedNoteId,
        selectedNote,
        searchTerm,
        setSearchTerm,
        addNote,
        deleteNote,
        selectNote,
        updateSelectedNote,
        startEditNote,
        handleSearch,
        filteredNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
