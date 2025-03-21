import express from "express";
import * as diaryServices from "../services/diaries.service";
import toNewDiaryEntry from "../utils";

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
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
    res.json(addedDiaryEntry);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    } else {
      res.status(400).send("An unknown error occurred");
    }
  }
});

export default router;
