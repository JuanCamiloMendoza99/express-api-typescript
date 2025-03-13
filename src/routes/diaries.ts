import express from "express";
import * as diaryServices from "../services/diaries.service";

const router = express.Router();

router.get("/", (_, res) => {
  res.send(diaryServices.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));

  return diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const { date, weather, visibility, comment } = req.body;
    const newDiaryEntry = diaryServices.addDiary({
      date,
      weather,
      visibility,
      comment,
    });
    res.json(newDiaryEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
