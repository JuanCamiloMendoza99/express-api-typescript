export type Weather = "sunny" | "rainy" | "cloudy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">;
export type newDiaryEntry = Omit<DiaryEntry, "id">;
