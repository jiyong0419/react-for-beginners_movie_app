import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<h1>user</h1>} />
      </Routes>
    </Router>
  );
}

/* JSX 풀이
<Router> => Router를 사용하는방법
<Routes> => Routes는 Routes안에 작성된 Route들에게 접근 <ul>같은 느낌이라고 보자
<Route>  => Routes 안에 작성되며 <li>같은 느낌이라고 보자
            Route path 는 route(경로)를 적어주고, element 에는 렌더링할 html태그 또는 component를 적어주자

*/
export default App;
