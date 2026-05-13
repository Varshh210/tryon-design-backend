import { client, handle_file } from "@gradio/client";
import fs from "fs";
import path from "path";
import os from "os";

async function testPrediction() {
  try {
    console.log("Connecting to yisol/IDM-VTON...");
    const huggingfaceClient = await client("yisol/IDM-VTON");
    console.log("Connected.");
  } catch (err) {
    console.error("Connection error:", err);
  }
}
testPrediction();
