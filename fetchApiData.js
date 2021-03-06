const fetchAPIData = function (
  apiPath,
  params = "",
  method = "GET",
  fupld = false
) {
  var apipara = {};

  return new Promise(function (resolve) {
    if (method === "POST" && fupld === false) {
      apipara = {
        method: method,
        redirect: "manual",
        mode: "cors",
        body: JSON.stringify(params),
        headers: {
          Referer: window.location.href,
          "Content-Type": "application/json",
        },
      };
    }
    if (method === "POST" && fupld === true) {
      apipara = {
        method: method,
        redirect: "manual",
        mode: "cors",
        body: JSON.stringify(params),
        headers: {
          Referer: window.location.href,
          "Content-Type": "multipart/form-data",
        },
      };
    }
    if (method === "GET") {
      apipara = {
        method: method,
        redirect: "manual",
        mode: "cors",
        headers: { Referer: window.location.href },
      };
    }
    fetch(apiPath, apipara)
      .then(function (response) {
        if (response.status === 200) {
          response.json().then(function (json) {
            resolve(json);
          });
        } else if (response.status === 400) {
          response.json().then(function (json) {
            window.onerror(JSON.stringify(json));
            resolve(json);
          });
        } else {
          window.onerror(JSON.stringify(response));
          resolve(response);
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  });
};
export default fetchAPIData;
