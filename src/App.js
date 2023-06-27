import { useCallback, useState } from "react";

import Category from "./component/Category";
import NewsList from "./component/NewsList";
import axios from "axios";

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category),[]);

 
  
  return (
    <div className="App">
      <Category category={category} onSelect={onSelect}></Category>
      <NewsList category={category}></NewsList>
    </div>
  );
}

export default App;
