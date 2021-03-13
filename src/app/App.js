import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [list, setListItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/groups")
      .then((response) => response.json())
      .then((data) => setListItems(data));
  }, []);

  return (
    <div>
      <ul>
        {list &&
          list.map((item, index) => <li key={`${index}`}>{item.GroupName}</li>)}
      </ul>
    </div>
  );
};

export default App;
