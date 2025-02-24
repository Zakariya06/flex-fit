import axios from "axios";

const client = axios.create({
	baseURL:"http://127.0.0.1:8000/api/",
	// baseURL:"http://140.245.29.49:8000/api/",
	// baseURL:"http://51.81.208.214:8004/api/",
	// baseURL:"https://app.centurionai.io/api/",
	headers:{
		"Content-Type": "multipart/form-data",
	},
	withCredentials: true
});

export default client;