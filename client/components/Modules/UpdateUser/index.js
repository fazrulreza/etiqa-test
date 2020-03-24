import {
  Container, Row, Button, Modal, Form, Col,
} from 'react-bootstrap';
import { Formik } from 'formik';
import { graphql } from 'react-apollo';
import { toast } from 'react-nextjs-toast'
import withModal from './withModal';
import updateQuery from './model';
import { createFrom } from '../Utils';

const UpdateUser = ({
  isOpen, onToggle, mutate, refetch,
  id, username, email, phone_no, skillsets, hobby,
}) => {
  return (
    <Formik
      initialValues={{
        username,
        email,
        phone_no,
        skillsets,
        hobby
      }}
      validate={(values => {
        const errors = {};
        if (!values.username) errors.username = 'username is required';
        if (!values.email) errors.email = 'email is required';
        if (!values.phone_no) errors.phone_no = 'phone is required';
        if (!values.skillsets) errors.skillsets = 'skillsets is required';
        if (!values.hobby) errors.hobby = 'hobby is required';
        return errors;
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const input = {
          username: values.username,
          email: values.email,
          phone_no: values.phone_no,
          skillsets: values.skillsets,
          hobby: values.hobby,
        };
        mutate({ variables: { input } })
          .then(() => {
            setSubmitting(false);
            onToggle();
            resetForm();
            setTimeout(() => refetch(), 1000);
            toast.notify('Successfully updated!', { duration: 7, type: 'success' });
          });
      }}
    >
      {
        ({ values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm }) => {
          const handleClose = () => {
            resetForm();
            onToggle();
          };

          return (
            <div>
              <Button onClick={onToggle} className="update-icon" />
              <Modal show={isOpen} onHide={handleClose} scrollable>
                <Modal.Header closeButton>
                  <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container fluid>
                    <Form onSubmit={handleSubmit}>
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'username', 'Username')}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'email', 'Email')}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'phone_no', 'Phone')}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'skillsets', 'Skillsets')}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'hobby', 'Hobby')}
                      <Button type="submit">Update</Button>
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

const UpdateUserMutation = graphql(updateQuery)(UpdateUser);
export default withModal(UpdateUserMutation);
