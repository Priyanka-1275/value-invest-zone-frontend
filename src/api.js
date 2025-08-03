import axios from 'axios';

const API_BASE_URL = ' https://value-invest-zone-20nq.onrender.com'; // Replace with your backend if deployed

export const uploadProperty = async (propertyData) => {
  const response = await axios.post(`${API_BASE_URL}/api/properties`, propertyData);
  return response.data;
};

export const fetchAllProperties = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/properties`);
  return response.data;
};

