import { Container } from 'react-bootstrap';
import { compose } from 'recompose';
import withSearchState from '../lib/searchState';
import withData from '../lib/apollo';
import MainPage from '../components/PageModules/MainPage';

const MainIndex = (props) => {
  const { activeTab, setActiveTab } = props;

  return (
    <Container fluid className="common-top">
      <h1>CDN User List</h1>
      <MainPage {...props} />
    </Container>
  );
};

const enhance = compose(
  withData,
  withSearchState,
);


export default enhance(MainIndex);
