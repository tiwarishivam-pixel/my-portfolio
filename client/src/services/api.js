import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const getProjects = async () => {
  try {
    console.log('Making API request to /projects');
    const response = await api.get('/projects');
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      url: error.config?.url
    });
    throw error;
  }
};

// Contact API
export const sendContactMessage = async (data) => {
  try {
    console.log('Sending contact message:', data);
    const response = await api.post('/contact', data);
    console.log('Contact response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};

export default api; 