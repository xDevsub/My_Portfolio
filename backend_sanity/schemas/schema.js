// First, we must import the schema creator
import { createSchema } from 'sanity';

// We manually create schemaTypes instead of importing from Sanity
import { schemaTypes } from "./index";


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then provide our document types
    types: schemaTypes,
});
