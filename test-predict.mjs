import { client } from "@gradio/client";

async function main() {
  try {
    const humanResponse = await fetch("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop");
    const humanBlob = await humanResponse.blob();

    const garmentResponse = await fetch("https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop");
    const garmentBlob = await garmentResponse.blob();

    console.log("Connecting to IDM-VTON...");
    const app = await client("yisol/IDM-VTON");

    console.log("Predicting...");
    const result = await app.predict("/tryon", [
      { background: humanBlob, layers: [], composite: null },
      garmentBlob,
      "shirt",
      true,
      true,
      30,
      42,
    ]);

    console.log("Success!", result.data);
  } catch (err) {
    console.error("Predict Error:", err);
  }
}

main();
