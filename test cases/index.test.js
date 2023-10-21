const express = require('express');
const request = require('supertest');

const app = express();

app.get('/', (req, res) => {
  res.render('search.ejs', { plant_info: {} });
});

app.post('/search', (req, res) => {
  const text = req.body.searched_data;
  res.render('search.ejs', { plant_info: { title: text } });
});

app.get('/:name', (req, res) => {
  const { name } = req.params;
  res.render('info.ejs', { plant_info: { title: name } });
});

test('should render the search page', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toContain('<h1>Search for plants</h1>');
});

test('should perform a query for the searched text', async () => {
  const response = await request(app).post('/search').send({ searched_data: 'tomato' });
  expect(response.status).toBe(200);
  expect(response.text).toContain('<h1>Plants</h1>');
  expect(response.text).toContain('<h2>Tomato</h2>');
});

test('should generate information for the chosen plant', async () => {
  const response = await request(app).get('/tomato');
  expect(response.status).toBe(200);
  expect(response.text).toContain('<h1>Tomato</h1>');
});

test('should handle invalid plant names gracefully', async () => {
  const response = await request(app).get('/invalid-plant-name');
  expect(response.status).toBe(404);
  expect(response.text).toContain('<h1>Plant not found</h1>');
});