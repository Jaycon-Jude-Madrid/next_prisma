// lib/axiosInstance.js
import axios from "axios";
import { signOut } from "next-auth/react";

const axiosInstance = axios.create({
	baseURL: `${process.env.BACKEND_BASE_URL}`, // Replace with your API base URL
	timeout: 1000,
	headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
	function (config) {
		// Do something before the request is sent
		// For example, add an authentication token to the headers
		// const token = localStorage.getItem("authToken"); // Retrieve auth token from localStorage
		// if (token) {
		// 	config.headers.Authorization = `Bearer ${token}`;
		// }
		return config;
	},
	function (error) {
		// Handle the error

		if (typeof window === "undefined") {
			console.error("Error processing request:", error.message);
		}
		if (error.response.status === 401) {
			signOut();
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
