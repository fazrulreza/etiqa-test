import { gql } from 'apollo-boost';

export default gql`
mutation delete($id: Int!) {
  deleteUser(id:$id){
    id
    deleted
  }
}`;
