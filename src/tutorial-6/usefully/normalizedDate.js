const getDate = (dateString) => {
  const date = dateString.slice(0, -3).split(', ');

  return `${date[0]} в ${date[1]}`;
};

export default getDate;
