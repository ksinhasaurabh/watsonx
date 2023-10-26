const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

// Replace with your credentials
const assistant = new AssistantV2({
  version: '2021-02-01', // Use the appropriate version
  authenticator: new IamAuthenticator({ apikey: 'YOUR_API_KEY' }),
  url: 'YOUR_SERVICE_URL',
});
async function sendMessage(userInput) {
  try {
    const response = await assistant.message({
      input: { text: userInput },
      workspaceId: 'YOUR_WORKSPACE_ID', // Replace with your workspace ID
    });

    // Log the response from Watson Assistant
    console.log(response);

    // Extract the assistant's reply
    const reply = response.result.output.generic[0].text;
    console.log('Assistant: ' + reply);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
sendMessage('Hello, Watson! Please give me video marketing transcript for my coffee shop. I want to give one free coffee to every couple every monday.');
