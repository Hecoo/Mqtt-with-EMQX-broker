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

const topic = `mqtt_070400b05bf2/HelloTopic2`;
client.on("connect", () => {
  console.log("Connected");
  client.publish(
    topic,
    "nodejs mqtt test Test test",
    { qos: 0, retain: false },
    (error) => {
      if (error) {
        console.error(error);
      }
    }
  );
});
