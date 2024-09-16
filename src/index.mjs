import express, { request, response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: "1", username: "Shalimar", displayname: "sh" },
  { id: "2", username: "jack", displayname: "ja" },
  { id: "3", username: "ricky", displayname: "rick" },
];

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello World!" });
});

app.get("/api/users", (request, response) => {
  response.status(201).send(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId);
  if (isNaN(parsedId))
    return response.status(400).send({ msg: "Bad Request. Invalid ID." });
  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken brest", price: 12.45 }]);
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/products
