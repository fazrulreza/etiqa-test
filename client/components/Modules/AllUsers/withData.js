import { pure, compose } from 'recompose';
import { graphql } from 'react-apollo';
import query from './model';

const withAllUsers = compose(

  // fetch graphql data
  graphql(query, {
    options: (
      { skillsets },
    ) => ({
      variables: { skillsets },
    }),
  }),

  // Prevents the component from updating unless a prop has changed
  pure,

);

export default withAllUsers;
