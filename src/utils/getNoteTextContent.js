export const getNoteTextContent = (noteContent) => {
  const div = document.createElement('div');
  div.innerHTML = noteContent;

  return (div.textContent || div.innerText || '').trim();
};
