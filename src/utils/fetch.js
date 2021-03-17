// API Requset function
export async function FETCH(type, url, body) {
  let headers = {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  if (body) {
    headers.body = JSON.stringify(body);
  }
  return await fetch(url, headers)
    .then((response) => response.json())
    .then(function (myJson) {
      return myJson;
    })
    .catch((error) => {
      console.log(error.statusCode, error);
      return error;
    });
}
