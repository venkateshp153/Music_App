export const apiCall = async (url, method, body) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  