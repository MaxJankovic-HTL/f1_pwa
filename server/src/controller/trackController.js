import asyncHandler from 'express-async-handler';
import * as model from '../model/trackModel.js';

// eslint-disable-next-line import/prefer-default-export
export const getTest = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTest());
});

export const getAll = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getAll());
});
