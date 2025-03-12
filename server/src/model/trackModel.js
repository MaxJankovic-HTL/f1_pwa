import { query } from '../../boilerplate/db/index.js';

// eslint-disable-next-line import/prefer-default-export
export const getTest = async () => {
  const { rows } = await query("SELECT 'It works' as test");
  return rows;
};

export const getAll = async () => {
  const { rows } = await query('SELECT * FROM tracks');
  return rows;
};

export const delTrack = async (id) => {
  const { rows } = await query('DELETE FROM tracks WHERE id = $1 RETURNING *;', [id]);
  return rows;
};

export const updateTrackName = async (id, name) => {
  const { rows } = await query('UPDATE tracks SET name = $2 WHERE id = $1 RETURNING *;', [id, name]);
  return rows;
};

export const createTrack = async (name, bg, lg, bj) => {
  const { rows } = await query(
    'INSERT INTO tracks(name, breitengrad, laengengrad, baujahr) VALUES ($1, $2, $3, $4);',
    [name, bg, lg, bj],
  );
  return rows;
};
