import { client } from "@gradio/client";
import fs from "fs";
async function testAPI() {
  try {
    const app = await client("Kwai-Kolors/Kolors-Virtual-Try-On");
    const endpoints = app.config.dependencies || app.config.endpoints;
    fs.writeFileSync("kolors_api.json", JSON.stringify(app.config, null, 2));
    console.log("Wrote API to kolors_api.json");
  } catch(e) {
    console.error(e);
  }
}
testAPI();
