const mqtt = require("mqtt");
console.log("Running");

const host = "broker.emqx.io";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
console.log(clientId);

const connectUrl = `mqtt://${host}:${port}`;
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});
let topic2 = `${clientId}/HelloTopic2`;
const topic = `${clientId}/HelloTopic`;
client.on("connect", () => {
  console.log("Connected");
  client.subscribe([topic2], () => {
    console.log(`Subscribe to topic '${topic2}'`);
  });
});

client.on("message", (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
});
