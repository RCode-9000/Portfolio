// deploy.js
const ghpages = require('gh-pages');

ghpages.publish(
  'dist', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/RCode-9000/Portfolio.git', // Update to point to your repository
    user: {
      name: 'Raagul Sundaralingam', // update to use your name
      email: 'raagul9803@gmail.com' // Update to use your email
    },
    overwrite: true
  },
  (err) => {
    if (err) {
      console.error('Deployment failed:', err);
    } else {
      console.log('Deployment successful!');
    }
  }
);
