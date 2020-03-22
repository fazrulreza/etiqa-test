/** import path */
import { join } from 'path';
/** import merge-graphql-schema */
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

/** Configure resolvers path for merging */
const resolversArray = fileLoader(join(__dirname, '.'), { recursive: true });
export default mergeResolvers(resolversArray);
