

export async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
  export function getData(url) {
    const fullUrl = `${process.env.BASE_URL}${url}`;
    console.log('Fetching URL:', fullUrl);
  
    return fetch(fullUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(responseData => {
        // Optional: Validate responseData structure
        if (!responseData || typeof responseData !== 'object') {
          throw new Error('Unexpected response format');
        }
        return responseData;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
        throw error;
      });
  }
  
  

  export async function deleteTimetablesById(ids) {
    try {
      const deletePromises = ids.map(async (id) => {
        const response = await fetch(`${process.env.BASE_URL}/timetables/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data); // Log the parsed JSON data
        return data; // Return the parsed JSON data
      });
  
      const results = await Promise.all(deletePromises);
      console.log(results); // Array of responses from the server for each deletion
      return results; // Return the array of responses
    } catch (error) {
      console.error('Error deleting timetables:', error);
      throw error; // Throw the error to handle it in the caller function
    }
}

export const postRequest = async (url, data, headers = {}) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("====////",responseData)
    return responseData;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};



  