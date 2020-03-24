import { gql } from 'apollo-boost';

export default gql`
mutation update($id: Int!, $input: UserInput!){
  updateUser(id: $id, input: $input){
    id
    updated
  }
}`;
