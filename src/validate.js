import Ajv from "ajv"
import addFormats from "ajv-formats"
import { readFileSync } from "fs";
const ajv = new Ajv()
addFormats(ajv);

const  validate = (schemaPath, dataPath) => {
  const schema = JSON.parse(readFileSync(new URL(schemaPath, import.meta.url)));
  const data = JSON.parse(readFileSync(new URL(dataPath, import.meta.url)));
  const validate = ajv.compile(schema)
  const valid = validate(data)

  if (!valid) {
    const details = validate.errors.map((error) => {
      return `Path: ${error.instancePath || '(root)'} | Message: ${error.message}`;
    });
    throw new Error(`${dataPath} is not valid against ${schemaPath}:\n${details.join('\n')}`);
  }
}

try {
  validate(
    '../schemas/1.0.0/requests/create_match.json', 
    '../schemas/1.0.0/examples/requests/create_match.json'
  );

  validate(
    '../schemas/1.0.0/requests/get_matches.json', 
    '../schemas/1.0.0/examples/requests/get_matches.json'
  );

  validate(
    '../schemas/1.0.0/requests/get_state.json', 
    '../schemas/1.0.0/examples/requests/get_state.json'
  );

  validate(
    '../schemas/1.0.0/requests/perform_action.json', 
    '../schemas/1.0.0/examples/requests/perform_action.json'
  );

  validate(
    '../schemas/1.0.0/responses/create_match.json', 
    '../schemas/1.0.0/examples/responses/create_match.json'
  );

  validate(
    '../schemas/1.0.0/responses/get_matches.json', 
    '../schemas/1.0.0/examples/responses/get_matches.json'
  );

  validate(
    '../schemas/1.0.0/responses/get_state.json', 
    '../schemas/1.0.0/examples/responses/get_state.json'
  );

  validate(
    '../schemas/1.0.0/responses/perform_action.json', 
    '../schemas/1.0.0/examples/responses/perform_action.json'
  );

  console.log('All JSON files are valid against their schemas');

} catch(e) {
  console.error(e.message);
  process.exit(1);
}