import axios from 'axios'

export const instance = axios.create({
	baseURL: process.env.BASE_URL || 'https://a8dc99c7a0a16282.mokky.dev/',
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' }
})
