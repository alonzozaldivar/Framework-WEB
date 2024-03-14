import React, { useEffect, useState } from 'react';
import './App.css';

import DataTable from './components/DataTable';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://diegochagas.com/saint-seiya-api/#/characters/personal')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Armadura',
        accessor: 'armor',
      },
      {
        Header: 'Signo',
        accessor: 'sing',
      },
    ],
    []
  );

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div id='js'>
      <h1 className='titulo'>Table of Knights of the Zodiac</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;