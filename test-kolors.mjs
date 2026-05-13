import { client } from "@gradio/client";
async function testAPI() {
  try {
    const app = await client("Kwai-Kolors/Kolors-Virtual-Try-On");
    console.log("Kwai-Kolors/Kolors-Virtual-Try-On is active.");
    if (app.config && app.config.endpoints) {
      console.log("Endpoints:", app.config.endpoints.map(e => e.api_name || "unnamed"));
      const tryonEndpoint = app.config.endpoints.find(e => e.api_name === "tryon");
      console.log("Tryon Endpoint Parameters:", tryonEndpoint ? tryonEndpoint.parameters : "None");
    }
  } catch(e) {
    console.error(e);
  }
}
testAPI();
