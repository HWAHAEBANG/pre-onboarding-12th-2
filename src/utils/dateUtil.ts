type DateType = (isoDateString: string) => string;

const formatIsoDate: DateType = (isoDateString) => {
  const date = new Date(isoDateString);

  const formattedDate = `${date.getFullYear()}년 ${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}월 ${date
    .getDate()
    .toString()
    .padStart(2, '0')}일 ${date.getHours()}:${date.getMinutes()}`;

  return formattedDate;
};

export default formatIsoDate;
