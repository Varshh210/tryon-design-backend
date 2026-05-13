import { client, handle_file } from "@gradio/client";
import * as fs from "fs";

// create dummy image
const imgBuf = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==", "base64");
fs.writeFileSync("dummy.png", imgBuf);

async function testVton() {
  try {
    console.log("Connecting to Kolors...");
    const app = await client("Kwai-Kolors/Kolors-Virtual-Try-On");
    
    console.log("Predicting...");
    const result = await app.predict(2, [
        handle_file("dummy.png"), // Person image
        handle_file("dummy.png"), // Garment image
        42, // Seed
        true, // Random seed
    ]);
    console.log("Result:", result.data);
  } catch (e) {
    console.error("Error connecting:", e);
  }
}
testVton();
