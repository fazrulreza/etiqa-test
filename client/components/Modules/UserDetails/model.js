import { gql } from 'apollo-boost';

export default gql`
query one($id: Int!) {
  oneUser(id: $id){
    id
    username
    email
    phone_no
    skillsets
    hobby
  }
}`;
