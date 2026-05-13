import { client } from "@gradio/client";

async function testSpace() {
  try {
    const app = await client("Nymbo/Virtual-Try-On");
    console.log("Success connecting to Nymbo/Virtual-Try-On");
  } catch (e) {
    console.error("Nymbo failed:", e);
  }
}

testSpace();
