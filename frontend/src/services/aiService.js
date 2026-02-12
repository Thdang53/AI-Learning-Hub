// Gọi API Backend để lấy phân tích từ AI
export const getAIAnalysis = async (code, context) => {
  try {
    const response = await fetch('http://localhost:5000/api/ai/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code,
        context: context,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error calling AI service:', error);
    throw error;
  }
};
