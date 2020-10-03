# Vue axios plugins

## Project setup
```javascript
//src/plugins/axios.js
import axios from "axios";

// Axios Interceptors request for API calls
axios.interceptors.request.use(async (config) => {
  
  //Your local store data
  const users = await JSON.parse(localStorage.getItem('users'));
  if (users) {
    config.headers['Authorization'] = `Bearer ${users.token}`;
  }

  // Start open loading
  document.getElementById('spin-loading').style.display = "block";
  document.getElementById('spin-loading').style.transition = "all .2s ease-out";

  return config;
},
  error => {
    // Close loading on request error
    setTimeout(() => {
      document.getElementById('spin-loading').style.display = "none";
    }, 500);

    Promise.reject(error)
  });

// Axios Interceptors response for API calls
axios.interceptors.response.use((response) => {
  // Close loading on response
  setTimeout(() => {
    document.getElementById('spin-loading').style.display = "none";
  }, 500);

  return response
}, async function (error) {
  const originalRequest = error.config;
  const users = JSON.parse(localStorage.getItem('users'));

  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;

    axios.defaults.headers.common['Authorization'] = `Bearer ${users.token}`;
    return axios(originalRequest);
  }

  // Close loading on response error.
  setTimeout(() => {
    document.getElementById('spin-loading').style.display = "none";
  }, 500);
  return Promise.reject(error);
});

export default axios;
```
