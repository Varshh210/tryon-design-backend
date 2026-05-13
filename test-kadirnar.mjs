import { client } from "@gradio/client";
import fs from "fs";

async function test() {
  try {
    const app = await client("kadirnar/IDM-VTON");
    console.log("Connected to kadirnar/IDM-VTON");
    const endpoints = app.config.dependencies || app.config.endpoints;
    fs.writeFileSync("kadirnar_api.json", JSON.stringify(app.config, null, 2));
    
    // Check if /tryon exists
    const hasTryon = endpoints.some(e => e.api_name === "tryon");
    console.log("Has /tryon API:", hasTryon);

  } catch(e) {
    console.error(e);
  }
}
test();
