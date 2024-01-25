export const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data; // Assuming the response contains { success, token, message }
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };