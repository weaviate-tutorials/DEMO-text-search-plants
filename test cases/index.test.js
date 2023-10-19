const supertest = require('supertest');
const app = require('./index'); // Assuming 'index.js' exports the app

const request = supertest(app);

describe('Index Tests', () => {
  it('should test the search route', async () => {
    const response = await request
      .post('/search')
      .send({ searched_data: 'your-search-query-here' })
      .expect(200);

    // Add your assertions here
  });

  it('should test the information route', async () => {
    const response = await request
      .get('/your-plant-name-here')
      .expect(200);

    // Add your assertions here
  });
});
