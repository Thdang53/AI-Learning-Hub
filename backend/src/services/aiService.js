export const getAIAnalysis = async (code, prompt) => {
  const response = await fetch('http://localhost:5000/api/ai/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, exercisePrompt: prompt }),
  });
  return response.json();
};