const Ajv = require("ajv");
const ajv = new Ajv();

const validate = ajv.compile(schema);
const valid = validate(data);

if (valid) {
  console.log("✅ JSON is valid");
} else {
  console.log("❌ JSON validation errors:", validate.errors);
}
