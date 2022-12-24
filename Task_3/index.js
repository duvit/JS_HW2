const namesOfDays = {
  ua: [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П`ятниця",
    "Субота",
    "Неділя",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

function getNameOfDay(obj) {
  const lang = "ua";
  const day = 3;

  return obj[lang][day - 1];
}

console.log(getNameOfDay(namesOfDays));
