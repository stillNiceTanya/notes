export const getFormattedDate = (date) =>
  new Date(date).toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
