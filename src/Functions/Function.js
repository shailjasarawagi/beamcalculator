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