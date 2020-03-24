import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-boost';
import { graphql } from '../configuration/config';

const uri = graphql[process.env.NODE_ENV];
const link = new HttpLink({
  uri, // Server URL (must be absolute)
  // opts: {
  //   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  // },
});

const config = {
  link,
};

export default withData(config);
