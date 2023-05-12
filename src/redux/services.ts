import axios from 'axios';

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: email,
          password: password,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return response.data;
      } catch (error) {
        throw error;
      }
};