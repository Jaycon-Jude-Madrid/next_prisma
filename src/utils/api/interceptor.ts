// axiosClient.ts
import axios from "axios";

const axiosClient = axios.create({
	baseURL: process.env.BASE_URL || "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

// You can add request interceptors if needed
axiosClient.interceptors.request.use(
	(config) => {
		// Modify request config here if needed
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// You can add response interceptors if needed
axiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosClient;
