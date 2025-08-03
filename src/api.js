import axios from 'axios';

const API_BASE_URL ='https://value-invest-zone-20nq.onrender.com'; // Deployed backend

export const uploadProperty = async (propertyData) => {
  const formData = new FormData();
  formData.append('title', propertyData.title);
  formData.append('area', propertyData.area);
  formData.append('description', propertyData.description);
  formData.append('location', propertyData.location);
  formData.append('price', propertyData.price);
  formData.append('image', propertyData.image); // should be File object

  const response = await axios.post(`${API_BASE_URL}/api/properties`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const fetchAllProperties = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/properties`);
  return response.data;
};


