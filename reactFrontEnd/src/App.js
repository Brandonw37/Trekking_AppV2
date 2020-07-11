import React, { useEffect, useState} from 'react';
import {Routes} from "./routes";
import Example from "./components/Navigation";
import { Link, useHistory } from 'react-router-dom';

function App(){
  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {

    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });

  const checkPath = () => {
    history.listen((location) => {
      setPath(location.name);
    });
  }

  useEffect(() => {
    checkPath();
  }, []);

  const showContact = path;
  let _contact;

  if(showContact !== "/contact"){
    _contact = (<li><Link to = '/contact'>Contact Me</Link></li>)

  }

  return (
    <div className="App">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Example/>
            </li>
          </ul>
          <ul>
          </ul>
        </nav>
        <Routes />
      </div>
      <footer/>
    </div>
  );
}

export default App;
