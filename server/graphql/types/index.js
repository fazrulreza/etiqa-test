/** import path */
import path from 'path';
/** import merge-graphql-schema */
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

/** Configure type path for merging */
const typesArray = fileLoader(path.join(__dirname, '.'), { recursive: true });
export default mergeTypes(typesArray);
