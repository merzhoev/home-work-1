const getNormalizedDate = (date) => {
  return {
    day: date.getDate(),
    month: monthToStr(date.getMonth()),
    year: date.getFullYear()
  }
}

function monthToStr(num) {
  return num > 12 || num < 1
    ? null
    : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(
      ','
    )[num - 1];
}

export default getNormalizedDate;