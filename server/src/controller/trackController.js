import asyncHandler from 'express-async-handler';
import * as model from '../model/trackModel.js';

// eslint-disable-next-line import/prefer-default-export
export const getTest = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTest());
});

export const getAll = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getAll());
});

export const deleteTrack = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await model.delTrack(id);

  if (result.length === 0) {
    res.status(404).json({ message: 'Track nicht gefunden' });
  } else {
    res.status(200).json({ message: 'Track gelöscht' });
  }
});

export const updateTrackName = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Name ist erforderlich' });
    return;
  }

  const result = await model.updateTrackName(id, name);

  if (result.length === 0) {
    res.status(404).json({ message: 'Track nicht gefunden' });
  } else {
    res.status(200).json(result[0]);
  }
});

export const createTrack = asyncHandler(async (req, res) => {
  const { name, bg, lg, bj } = req.body;

  if (!name || !bg || !lg || !bj) {
    res.status(400).json({ message: 'Alle Felder sind erforderlich' });
    return;
  }

  const result = await model.createTrack(name, bg, lg, bj);
  res.status(201).json(result[0]);
});
