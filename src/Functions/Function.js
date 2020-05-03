/**
 * Token is taken for authentication
 */
export const getToken = () => {
  // let token = window.atob(localStorage.getItem("token"));
  let token = localStorage.getItem("token");
  // console.log("token in functions", token)
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  return headers;
}
export const getBackendDomain=()=>{
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
   return ( {
      // baseURL:process.env.REACT_APP_BACKEND_URL;
      
      baseURL: 'http://aaab2381.ngrok.io/'
    })
} else {
  return ( {
    // baseURL:process.env.REACT_APP_BACKEND_URL;
    
    baseURL: 'https://beamback.calcgen.com'
  })
}
}