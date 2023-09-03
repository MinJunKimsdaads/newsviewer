// import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./component/NewsPage";
// import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category),[]);

  // const category1 = useParams();
  // console.log(category1);


  return (
    
    <Routes>
      <Route path={`/:category?`} element={<NewsPage></NewsPage>}></Route>
    </Routes>
  );
}

export default App;
