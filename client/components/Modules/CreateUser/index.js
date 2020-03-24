import {
  Container, Button, Modal, Form,
} from 'react-bootstrap';
import { Formik } from 'formik';
import { graphql } from 'react-apollo';
import { toast } from 'react-nextjs-toast'
import withModal from './withModal';
import createQuery from './model';
import { createFrom } from '../Utils';
import {
  usernameError, emailError, phoneError, skillsetsError, hobbyError,
  usernameText, emailText, phoneText, skillsetsText, hobbyText,
  createTitle, createButton, createMsg,
} from '../../../configuration/parameter'

const CreateUser = ({
  isOpen, onToggle, mutate, refetch
}) => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone_no: '',
        skillsets: '',
        hobby: '',
      }}
      validate={(values => {
        const errors = {};
        if (!values.username) errors.username = usernameError;
        if (!values.email) errors.email = emailError;
        if (!values.phone_no) errors.phone_no = phoneError;
        if (!values.skillsets) errors.skillsets = skillsetsError;
        if (!values.hobby) errors.hobby = hobbyError;
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
            toast.notify(createMsg, { duration: 7, type: 'success' });
          });
      }}
    >{
        ({ values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm }) => {
          const handleClose = () => {
            resetForm();
            onToggle();
          };

          return (
            <div>
              <Button onClick={onToggle} >{createTitle}</Button>
              <Modal show={isOpen} onHide={handleClose} scrollable>
                <Modal.Header closeButton>
                  <Modal.Title>{createTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container fluid>
                    <Form onSubmit={handleSubmit}>
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'username', usernameText)}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'email', emailText)}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'phone_no', phoneText)}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'skillsets', skillsetsText)}
                      {createFrom(values, touched, errors, handleChange, handleBlur, 'hobby', hobbyText)}
                      <Button type="submit">{createButton}</Button>
                    </Form>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
          )
        }}</Formik>
  );
};

const CreateUserMutation = graphql(createQuery)(CreateUser);
export default withModal(CreateUserMutation);
