import ReactTable from 'react-table';
import { Container, Badge } from 'react-bootstrap';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import withAllUsers from './withData';
import {
  loadingColor, usernameText, emailText, phoneText, skillsetsText, hobbyText,
} from '../../../configuration/parameter';
import UserDetails from '../UserDetails';
import CreateUser from '../CreateUser';
import UpdateUser from '../UpdateUser';
import DeleteUser from '../DeleteUser';

const getBadge = (list) => {
  const newList = list.split(',');
  return newList.map(x => {
    return (
      <Badge key={x} pill variant='info'>{x}</Badge>
    )
  })
}


const getCols = (refetch) => [
  {
    Header: usernameText,
    accessor: 'username',
    minResizeWidth: 10,
    width: 120,
    style: { whiteSpace: 'unset' },
  },
  {
    Header: emailText,
    accessor: 'email',
    Cell: ({ original: { email: w } }) => <a href={`mailto:${w}`}>{w}</a>,
    minResizeWidth: 10,
    style: { whiteSpace: 'unset' },
  },
  {
    Header: phoneText,
    accessor: 'phone_no',
    minResizeWidth: 10,
    style: { whiteSpace: 'unset' },
  },
  {
    Header: skillsetsText,
    accessor: 'skillsets',
    Cell: ({ original: { skillsets: z } }) => getBadge(z),
    minResizeWidth: 10,
    style: { whiteSpace: 'unset' },
  },
  {
    Header: hobbyText,
    accessor: 'hobby',
    minResizeWidth: 10,
    style: { whiteSpace: 'unset' },
  },
  // {
  //   Header: amountText,
  //   accessor: 'yr_revenue_amt',
  //   Cell: ({ value }) => <span>{currencyFormatter(value, 3)}</span>,
  //   minResizeWidth: 10,
  //   width: 100,
  // },
  {
    Header: '',
    Cell: ({ original: { id: x } }) => <UserDetails id={x} />,
    minResizeWidth: 10,
    width: 50,
  },
  {
    Header: '',
    Cell: (
      { original:
        {
          id: a, username: b, email: c, phone_no: d, skillsets: e, hobby: f
        }
      }) => <UpdateUser id={a} username={b} email={c} phone_no={d} skillsets={e} hobby={f} refetch={refetch} />,
    minResizeWidth: 10,
    width: 50,
  },
  {
    Header: '',
    Cell: ({ original: { id: x, username: y } }) => <DeleteUser id={x} username={y} refetch={refetch} />,
    minResizeWidth: 10,
    width: 50,
  },
];

const AllUsers = ({ data: { loading, allUsers, refetch } }) => {
  if (loading) {
    return (
      <div className="loading-bar">
        <ClimbingBoxLoader loading color={loadingColor} />
      </div>
    );
  }

  return (
    <div className="common-top">
      <Container>
        <CreateUser refetch={refetch} />
        <ReactTable
          data={allUsers}
          columns={getCols(refetch)}
          defaultPageSize={10}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]).toUpperCase().includes(filter.value.toUpperCase())}
          style={({
            fontSize: 13,
          })}
        />
      </Container>
    </div>

  );
};

export default withAllUsers(AllUsers);
