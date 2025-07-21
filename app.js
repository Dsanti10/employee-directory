import express from "express";
import employees from "#db/employees";

const app = express();

export default app;

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);

  const randomEmployee = employees[randomIndex];

  res.send(randomEmployee);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((n) => n.id == id);

  if (!employee) {
    return res.status(404).send("This employee does not exist");
  }

  res.send(employee);
});
