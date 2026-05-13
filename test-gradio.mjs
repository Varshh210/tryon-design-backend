import { client } from "@gradio/client";

async function main() {
  try {
    const app = await client("yisol/IDM-VTON");
    console.dir(app.config.api, { depth: null });
  } catch (err) {
    console.error("Error:", err);
  }
}
main();
