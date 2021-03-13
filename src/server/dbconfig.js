const config = {
  endpoint: "https://freeflow01.documents.azure.com:443/",
  key:
    "22VQfp0Yt2m6lmUIt9doHgPDARhuPCxvk0wPrgcAxtfQG5bvcAVGrdhNusMqDJMoq7sxbUc4gXQUBcYA0aEXbg==",
  databaseId: "FreeFlowDB01",
  containerId: "Activity",
  partitionKey: { kind: "Hash", paths: ["/id"] },
};

module.exports = config;
