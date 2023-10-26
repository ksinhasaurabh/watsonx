const { AssistantV2 } = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

// Replace with your Watson Assistant credentials
const assistant = new AssistantV2({
  version: '2021-02-01', // Use the appropriate version
  authenticator: new IamAuthenticator({ apikey: 'YOUR_ASSISTANT_API_KEY' }),
  url: 'YOUR_ASSISTANT_SERVICE_URL',
});
async function requestSocialMediaPostIdea(userInput) {
  try {
    const response = await assistant.message({
      input: { text: userInput },
      workspaceId: 'YOUR_ASSISTANT_WORKSPACE_ID', // Replace with your workspace ID
    });

    const assistantResponse = response.result.output.generic[0].text;
    return assistantResponse;
  } catch (error) {
    console.error('Error communicating with Watson Assistant:', error);
    return null;
  }
}
