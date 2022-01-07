const getNormalizedDate = (date) => (
  date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })
);

export default getNormalizedDate;