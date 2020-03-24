import { pure, compose } from 'recompose';
import { graphql } from 'react-apollo';
import query from './model';

const withUserDetails = compose(

  // fetch graphql data
  graphql(query, {
    options: ({ id }) => ({
      variables: { id },
    }),
  }),

  // Prevents the component from updating unless a prop has changed
  pure,

);

export default withUserDetails;
