import { gql } from 'apollo-boost';

export default gql`
mutation create($input: UserInput!){
  createUser(input:$input){
    id
    username
    email
    phone_no
    skillsets
    hobby
  }
}`;
