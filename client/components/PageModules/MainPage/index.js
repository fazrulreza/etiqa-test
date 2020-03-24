import Container from 'react-bootstrap/Container';
import Main from '../../../lib/layout';
import AllUsers from '../../Modules/AllUsers';

const MainPage = props => (
  <Main>
    <Container fluid>
      <AllUsers {...props} />
    </Container>
  </Main>
);

export default MainPage;
