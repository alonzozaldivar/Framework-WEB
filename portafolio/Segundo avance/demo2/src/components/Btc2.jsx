import { useEffect, useState } from 'react';

const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

export default function Btc2() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        setData(result);
      }, error => {
        setIsLoading(false);
        setError(error);
      })
  }, []);

  const getContent = () => {
    if (isLoading) {
      return (
        <div className="App">
          <h4>Loading Data...</h4>
          <progress value={null} />
        </div>
      );
    }
    if (error){
      return <h4>error</h4>
    }
    return (
      <div className='App'>
        <h1>BTC to USD|EUR|GBP</h1>
        <h3>BTC to USD</h3>
          <div class="row">
          <div class="col-2"> </div>
            <div class="col-8">
              <table class='table table-striped'>
                <thead>
                  <th>RATE</th>
                  <th>RATE FLOAT</th>
                  <th>DESCRIPTION</th>
                  <th>UPDATED</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{data["bpi"]["USD"].rate}</td>
                    <td>{data["bpi"]["USD"].rate_float}</td>
                    <td>{data["bpi"]["USD"].description}</td>
                    <td>{data["time"].updated}</td>
                  </tr>
                  <tr>
                    <td>{data["bpi"]["EUR"].rate}</td>
                    <td>{data["bpi"]["EUR"].rate_float}</td>
                    <td>{data["bpi"]["EUR"].description}</td>
                    <td>{data["time"].updated}</td>
                  </tr>
                  <tr>
                    <td>{data["bpi"]["GBP"].rate}</td>
                    <td>{data["bpi"]["GBP"].rate_float}</td>
                    <td>{data["bpi"]["GBP"].description}</td>
                    <td>{data["time"].updated}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-2"> </div>
          </div>
      </div>
    )
  }

console.log(data)

  return (
    <div className="App">
      {getContent()}
    </div>
  );
}

const styles = {
  textProps: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}