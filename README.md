# Memory Game Backend for Supercharge

The API is deployed on Heroku on the following link: https://supercharge-node.herokuapp.com/
My Heroku account is connected to my GitHub repository and continous deployment is turned on,
so every push to the master branch is updated there.

On an empty machine, it could be set up with the following steps:
1. Clone the repo
2. Enter the root directory
3. Default PORT is 8080, exporting a PORT environmental variable changes it
4. A valid MongoDB connection URI most be provided as an environment variable with the key 'MONGODB_URI'
5. Run 'npm install'
6. Run 'npm start'
