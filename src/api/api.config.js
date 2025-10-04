export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const endpoints = {
    // Auth endpoints
    register: `${API_BASE_URL}/users/create`,
    login: `${API_BASE_URL}/api/v1/users/login`,
    logout: `${API_BASE_URL}/api/v1/users/logout`,

    // User endpoints
    profile: `${API_BASE_URL}/api/v1/users/me`,
};