# Plant information search

This project's origin [here](https://github.com/weaviate/weaviate-examples/tree/main/plant-information-searching-using-NodeJs).

## Description
The goal of this project is to enable semantic search capabilities, allowing users to retrieve information of plants with a focus on meaning and context rather than just keywords. This is carried out using weaviate client!

https://user-images.githubusercontent.com/75658681/162991750-46430744-e68f-4990-98c7-a41f80d130c0.mp4

## Used technologies
1. Docker
2. JavaScript
3. CSS
4. Weaviate client

## Prerequisites
1. Install Docker and Docker-Compose
2. Install Node and npm

## Setup instructions
1. Run command `npm install` to install all the required node modules.
2. Make sure Docker file is running. 
3.  the add_data.js with command `node add_data.js` to add data 
4. After adding data run command `node index.js` and navigate to http://localhost:4000/ to perform searching

## Usage instructions
On http://localhost:4000/ , Use the search bar to search for the specific plant and click on the card to know more information.
![Alt text](views/images/plant.png)

## Dataset license
The dataset used for this example can be found here: https://data.world/sharon/vegetables-herbs-and-edible-flowers 

## Test Cases
1: Install jest and supertest:
Make sure you have Jest and Supertest installed in your project. You can install them using npm or yarn:
```
npm install jest supertest --save-dev
# or
yarn add jest supertest --dev
```
2: Run the tests:

You can now run the tests using the jest command:
```
npx jest
# or
yarn jest
```
Make sure to replace 'your-route-here' and 'your-search-query-here' with the actual routes and search queries you want to test. Similarly, replace 'your-plant-name-here' with the plant name you want to test.
