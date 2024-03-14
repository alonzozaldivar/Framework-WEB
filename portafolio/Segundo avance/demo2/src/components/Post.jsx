import { useEffect, useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/posts"

export default function Post() {
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
        <h1>Social Network UTT</h1>
        <h3>TSU EVND</h3>
          <div class="row">
          <div class="col-2"> </div>
            <div class="col-8">
              <table class='table table-striped'>
                <thead>
                  <th>POST ID</th>
                  <th>USER ID</th>
                  <th>POST TITLE</th>
                  <th>POST BODY</th>
                </thead>
                <tbody>
                    data.forEach({element} {
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.userId}</td>
                            <td>{element.title}</td>
                            <td>{element.body}</td>
                        </tr>
                    });
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
        
    </div>
  );
}