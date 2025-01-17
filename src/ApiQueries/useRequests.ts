import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiHost = 'http://localhost:8080'; // Hardcoding the API host for local development
const requestsEndpoint = '/requests';

const getRequests = async () => {
  const url = `${apiHost}${requestsEndpoint}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching requests:', error);
    throw error;
  }
};

const useRequests = () => {
  return useQuery({
    queryKey: ['requests'],
    queryFn: getRequests,
  });
};

export default useRequests;
