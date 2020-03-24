import {
  Container, Button, Modal, Form,
} from 'react-bootstrap';
import { Formik } from 'formik';
import { graphql } from 'react-apollo';
import { toast } from 'react-nextjs-toast'
import withModal from './withModal';
import deleteQuery from './model';
import { deleteMsg, deleteTitle, deleteButton, cancelButton } from '../../../configuration/parameter'

const DeleteUser = ({
  isOpen, onToggle, mutate, refetch, id, username,
}) => {
  return (
    <Formik
      initialValues={{ id, username }}
      onSubmit={() => {
        mutate({ variables: { id } })
          .then(() => {
            onToggle();
            setTimeout(() => refetch(), 1000);
            toast.notify(deleteMsg, { duration: 7, type: 'success' });
          });
      }}
    >
      {
        ({ handleSubmit }) => {
          return (
            <div>
              <Button onClick={onToggle} className="delete-icon" />
              <Modal show={isOpen} onHide={onToggle} scrollable>
                <Modal.Header closeButton>
                  <Modal.Title>{deleteTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container fluid>
                    <Form onSubmit={handleSubmit}>
                      <p>{`System will delete user ${username}.`}</p>
                      <p>Are you sure?</p>
                      <Button variant="secondary" onClick={onToggle}>{cancelButton}</Button>{'  '}
                      <Button variant="danger" type="submit">{deleteButton}</Button>
                    </Form>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
          )
        }}
    </Formik>
  );
};

const DeleteUserMutation = graphql(deleteQuery)(DeleteUser);
export default withModal(DeleteUserMutation);
