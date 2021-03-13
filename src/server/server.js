const CosmosClient = require("@azure/cosmos").CosmosClient;
const createFilter = require("odata-v4-pg").createFilter;
const parser = require("odata-v4-parser");
const config = require("./dbconfig");
const dbContext = require("./databaseContext");
const express = require("express");
const app = express();
const port = "5000";

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/groups", (req, res) => {
  // const filter = createFilter(req.query.$filter);
  console.log(req.params.id);
  const querySpec = {
    query: `SELECT * from c`,
  };

  async function fetch() {
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();

    res.send(items);
  }
  fetch();
});

app.listen(port, () => console.log("Server started"));
