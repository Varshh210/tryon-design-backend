import { client } from "@gradio/client";
import fs from "fs";
async function test() {
  try {
    const app = await client("fashn-ai/fashn-vton-1.5");
    console.log("Connected to fashn-ai/fashn-vton-1.5");
    const endpoints = app.config.dependencies || app.config.endpoints;
    const hasTryon = endpoints.some(e => e.api_name && e.api_name.includes("tryon"));
    console.log("Has tryon API:", hasTryon);
    endpoints.forEach(e => {
        if(e.api_name) console.log("API:", e.api_name);
    });
  } catch(e) {
    console.error("Fashn failed:", e);
  }
}
test();
