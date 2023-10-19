const weaviate = require("weaviate-client");
const app = require('./add_data'); // Assuming 'add_data.js' exports the app

describe('Add Data Tests', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4000); // Start the server before tests
  });

  afterAll((done) => {
    server.close(done); // Close the server after tests
  });

  it('should test something...', async () => {
    // Write your test cases for add_data.js here using Supertest
    // Example: Send HTTP requests and assert the responses
    const response = await request(server)
      .get('/your-route-here')
      .expect(200);

    // Add your assertions here
  });
});
