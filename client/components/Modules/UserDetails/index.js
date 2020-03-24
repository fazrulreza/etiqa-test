import {
  Container, Row, Button, Modal, Form, Col,
} from 'react-bootstrap';
import compose from 'recompose/compose';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import withUserDetails from './withData';
import withModal from './withModal';
import { loadingColor } from '../../../configuration/parameter';
import { showForm } from '../Utils'

const UserDetails = ({
  isOpen, onToggle, id, data: { loading, oneUser },
}) => {
  if (loading) {
    return (
      <div className="loading-bar">
        <ClimbingBoxLoader loading color={loadingColor} />
      </div>
    );
  }

  return (
    <div>
      <Button onClick={onToggle} className="detail-icon" />
      <Modal show={isOpen} onHide={onToggle} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{`${oneUser.username}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form>
              {showForm(oneUser.id, 'ID')}
              {showForm(oneUser.email, 'Email')}
              {showForm(oneUser.phone_no, 'Phone')}
              {showForm(oneUser.skillsets, 'Skillsets')}
              {showForm(oneUser.hobby, 'Hobby')}
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const enhance = compose(
  withUserDetails,
  withModal,
);

export default enhance(UserDetails);
