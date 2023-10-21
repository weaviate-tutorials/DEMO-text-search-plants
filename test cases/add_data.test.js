const weaviate = require('weaviate-client');

const client = weaviate.client({
  scheme: 'http',
  host: 'localhost:8080',
});

test('should create a new class named Plants', async () => {
  const schema = await client.schema.getSchema();
  expect(schema.classes).toContain('Plants');
});

test('should add 15 plant objects to the Plants class', async () => {
  const plants = await client.data.getObjects({ className: 'Plants' });
  expect(plants.length).toBe(15);
});

test('should add the correct properties to each plant object', async () => {
  const plant = await client.data.getObject({ className: 'Plants', id: '1' });
  expect(plant).toHaveProperty('title');
  expect(plant).toHaveProperty('alternateName');
  expect(plant).toHaveProperty('sowInstructions');
  expect(plant).toHaveProperty('spaceInstructions');
  expect(plant).toHaveProperty('harvestInstructions');
  expect(plant).toHaveProperty('compatiblePlants');
  expect(plant).toHaveProperty('avoidInstructions');
  expect(plant).toHaveProperty('culinaryHints');
  expect(plant).toHaveProperty('culinaryPreservation');
  expect(plant).toHaveProperty('url');
  expect(plant).toHaveProperty('imageLinks');
});