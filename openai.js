const axios = require('axios');

// Your OpenAI GPT-3 API key
const apiKey = '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';

// API endpoint for GPT-3
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'; // Replace with the appropriate model

// Your query to ChatGPT
const query = 'What is the capital of France?';

// Define the request payload
const requestData = {
  prompt: query,
  max_tokens: 50, // Adjust this as needed to control response length
};

// Set up headers for the API request
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
};

// Make a POST request to GPT-3 API
axios.post(apiUrl, requestData, { headers })
  .then(response => {
    // Handle the response from GPT-3
    const answer = response.data.choices[0].text;
    console.log('Answer from ChatGPT:', answer);
  })
  .catch(error => {
    // Handle errors
    console.error('Error from ChatGPT:', error.response.data);
  });
