import { gql } from 'apollo-boost';

export default gql`
query all($skillsets: String) {
  allUsers(skillsets: $skillsets){
    id
    username
    email
    phone_no
    skillsets
    hobby
  }
}`;
