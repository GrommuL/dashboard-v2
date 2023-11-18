import axios from 'axios'

export const instance = axios.create({
	baseURL: process.env.BASE_URL || 'https://dashboard-backend-spir.onrender.com/',
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' }
})
