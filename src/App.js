import { useState } from "react";

import List from "./List";

import data from "./data";

import "./App.css";

function App() {
  const [listItems, setListItems] = useState(data);

  return (
    <div className='App'>
      <main>
        <section>
          <List listItems={listItems} />
        </section>
      </main>
    </div>
  );
}

export default App;
