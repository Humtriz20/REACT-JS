import axios from 'axios';

// const API_URL = 'http://localhost:80/backend/auth.php'; // Replace with your PHP backend URL
const API_URL = 'http://localhost:8000/auth.php'; // Replace with your PHP backend URL

const register = async (email, name, password) => {
  console.log(email, name, password);
  try {
    const data = {
      register: true,
      email: email,
      name: name,
      password: password,
    }
    const response = await axios.post(API_URL, JSON.stringify(data));
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Registration failed: ' + error.message);
  }
};

const login = async (email, password) => {
  try {
    const data = {
      login: true,
      email: email,
      password: password,
    }
    const response = await axios.post(API_URL, JSON.stringify(data));
    return response.data;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

const authService = {
  register,
  login,
};

export default authService;