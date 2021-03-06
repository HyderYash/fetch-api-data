# fetch-api-data

![npm bundle size](https://img.shields.io/bundlephobia/min/fetch-api-data)
![NPM](https://img.shields.io/npm/l/fetch-api-data)
![npm](https://img.shields.io/npm/v/fetch-api-data)

π Promise based function for calling API easily in Node Js or any Javascript framework!

# Installing

Using npm:

`$ npm install fetch-api-data`

# Example

`import fetchAPIData from "fetch-api-data"`

or

`const fetchAPIData = require('fetch-api-data')`

# For GET Request

```
fetchAPIData("https://jsonplaceholder.typicode.com/todos").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
```

# For POST Request

```
const formData = {
    email: "test@test.com",
    password: "1234"
}
fetchAPIData("https://reqres.in/api/users", formData, "POST").then((json) => {
    console.log(json)
});
```

πAnd you are all set to use this package!
