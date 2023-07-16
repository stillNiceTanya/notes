import { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import classNames from 'classnames';
import { debounce } from 'debounce';

import { NotesContext } from '../../../context/NotesContext';

import 'react-quill/dist/quill.snow.css';
import './Editor.css';

const Editor = () => {
  const { isEditMode, selectedNote, updateSelectedNote } =
    useContext(NotesContext);

  const [value, setValue] = useState('');

  const handleContentChange = (value) => {
    setValue(value);
    updateSelectedNote(value);
  };

  const debouncedContentChange = debounce(handleContentChange, 500);

  useEffect(() => {
    if (!selectedNote) return;

    setValue(selectedNote.content);
  }, [selectedNote]);

  return (
    <ReactQuill
      className={classNames('note-editor w-full h-full', {
        disabled: !isEditMode,
      })}
      modules={{
        toolbar: [
          [{ header: [] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
      }}
      value={value}
      autoFocus
      readOnly={!isEditMode}
      onChange={debouncedContentChange}
      placeholder='Заметка пуста'
    />
  );
};

export default Editor;
