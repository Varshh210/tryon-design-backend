import fs from "fs";
const data = JSON.parse(fs.readFileSync("kolors_api.json", "utf-8"));
const dep = data.dependencies[2];
console.log("Inputs:");
const inputs = dep.inputs.map(inputId => data.components.find(c => c.id === inputId));
inputs.forEach(i => {
  console.log(`- Type: ${i.type}, Component ID: ${i.id}, Label: ${i.props.label || 'None'}`);
});
