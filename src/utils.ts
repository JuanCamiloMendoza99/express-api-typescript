import { newDiaryEntry, Weather, Visibility } from "./types";

const parseComment = (comment: any): string => {
  if (!isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }

  return comment;
};

const parseDate = (date: any): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date");
  }

  return date;
};

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather");
  }

  return weather;
};

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility");
  }

  return visibility;
};

const isVisibility = (string: any): boolean => {
  return Object.values(Visibility).includes(string);
};

const isWeather = (string: any): boolean => {
  return Object.values(Weather).includes(string);
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.isibility),
  };

  return newEntry;
};

export default toNewDiaryEntry;
