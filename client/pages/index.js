import { Container } from 'react-bootstrap';
import withData from '../lib/apollo';
import MainPage from '../components/PageModules/MainPage';
import { mainTitle } from '../configuration/parameter'

const MainIndex = (props) => {
  const { activeTab, setActiveTab } = props;

  return (
    <Container fluid className="common-top">
      <h1 className="main-title" >{mainTitle}</h1>
      <MainPage {...props} />
    </Container>
  );
};

export default withData(MainIndex);
