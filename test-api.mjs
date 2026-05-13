import { client } from "@gradio/client";
async function testAPI() {
  const app = await client("Nymbo/Virtual-Try-On");
  const config = await app.config;
  console.log("Config:", JSON.stringify(config, null, 2));
}
testAPI();
