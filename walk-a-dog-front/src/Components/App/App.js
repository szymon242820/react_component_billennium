import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Profile from '../Profile/Profile';


function App() {
  const [user, setUser] = useState();
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {setUser(res.data[1]);})
      .catch(error => {alert(error);});
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Walk'a'Dog</h1>
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <h1>Homepage</h1>
              <Button variant="primary" onClick={() => {window.location.href="/profile"}}>PROFIL</Button>  
            </Route>
            <Route path="/profile">
              <Profile user={user} />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
