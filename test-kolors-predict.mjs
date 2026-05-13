import { client, handle_file } from "@gradio/client";
import fs from "fs";
import path from "path";
import os from "os";

async function testPrediction() {
  try {
    const huggingfaceClient = await client("Kwai-Kolors/Kolors-Virtual-Try-On");
    console.log("Connected. Submitting prediction...");
    
    // We will use two public image URLs that Gradio can download, or pass handle_file
    // The dataset component earlier had some images. We can use URLs if preferred, but let's write 1x1 pixel image to test.
    const emptyImage = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64");
    const testPath1 = path.join(os.tmpdir(), `test1_${Date.now()}.png`);
    const testPath2 = path.join(os.tmpdir(), `test2_${Date.now()}.png`);
    fs.writeFileSync(testPath1, emptyImage);
    fs.writeFileSync(testPath2, emptyImage);

    // Call using fn_index
    const result = await huggingfaceClient.predict(2, [
      handle_file(testPath1),
      handle_file(testPath2),
      0, // Seed
      true, // Random seed
    ]);
    console.log("Result:", JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("Prediction error:", err);
  }
}
testPrediction();
