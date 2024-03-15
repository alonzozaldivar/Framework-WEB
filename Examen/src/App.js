import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import './App.css';
import TableNfl from './components/TableNfl';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1 className='titulo'>NFL TABLE</h1>

      <Tab.Container defaultActiveKey="todosPendientes">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="todosPendientes">All Pending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pendientesSinResolver">Unresolved Pending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pendientesResueltos">Solved Pending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="idUserId">ID y UserID</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="todosPendientes">
            <h2>Lists of All Pending</h2>
            <h3>ID Only</h3>
            <TableNfl className="table table-striped" columns={[{ Header: 'ID', accessor: 'id' }]} data={data} />

            <h3>Tile and ID</h3>
            <TableNfl className="table table-striped" columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'Titulo', accessor: 'title' }]} data={data} />
          </Tab.Pane>
          <Tab.Pane eventKey="pendientesSinResolver">
            <h2>Unresolved Pending</h2>
            <TableNfl className="table table-striped" columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'Titulo', accessor: 'title' }]} data={data.filter(item => !item.completed)} />
          </Tab.Pane>
          <Tab.Pane eventKey="pendientesResueltos">
            <h2>Solved Pending</h2>
            <TableNfl className="table table-striped" columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'Titulo', accessor: 'title' }]} data={data.filter(item => item.completed)} />
          </Tab.Pane>
          <Tab.Pane eventKey="idUserId">
            <h2>ID y UserID</h2>
            <TableNfl className="table table-striped" columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'UserID', accessor: 'userId' }]} data={data} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default App;


