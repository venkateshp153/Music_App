import axios from "axios";
import { BASE_URL } from "../../env";
export const API = axios.create({
    baseURL:BASE_URL,
});""
// export const baseURL =  "http://192.168.1.3:8080/api"
export const timetableURL = `${BASE_URL}/timetables`

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
  export async function getData(url) {
    try {
      const response = await fetch(url);
  
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
  

  export async function deleteTimetablesById(ids) {
    try {
      const deletePromises = ids.map(async (id) => {
        const response = await fetch(`http://192.168.1.3:8080/api/timetables/${id}`, {
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


  