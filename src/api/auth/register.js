import { endpoints } from "../api.config";
import api from "../api.intercepter";

/**
 * Register function that creates a new user account
 * @param {Object} userData - User registration data
 * @param {string} userData.name - User's full name
 * @param {string} userData.username - User's username
 * @param {string} userData.email - User email
 * @param {string} userData.password - User password
 * @returns {Promise} - Promise that resolves to the registration response (timestamp)
 */
export const registerAPI = async (userData) => {
    try {
        const { name, username, email, password } = userData;
        const response = await api.post(endpoints.register, {
            name,
            username,
            email,
            password,
            blogs: []
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.detail || 'Registration failed. Please try again.');
    }
};