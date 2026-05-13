import { client } from "@gradio/client";
async function test() {
  try {
    const app = await client("fashn-ai/fashn-vton-1.5");
    const endpoints = app.config.dependencies || app.config.endpoints;
    const tryOnDep = endpoints.find(e => e.api_name === "try_on");
    
    if (tryOnDep) {
      console.log("Outputs:", tryOnDep.outputs.length);
      const outputs = tryOnDep.outputs.map(id => app.config.components.find(c => c.id === id));
      outputs.forEach(o => {
        console.log(`- Type: ${o.type}`);
      });
    }
  } catch(e) {
    console.error("error", e);
  }
}
test();
