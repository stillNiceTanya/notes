import { getNoteTextContent } from './getNoteTextContent';

export const getNoteTitle = (noteContent) => {
  const noteText = getNoteTextContent(noteContent);

  return noteText.slice(0, 50) || 'Новая заметка';
};
