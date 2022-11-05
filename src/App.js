import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />} />
        <Route path={process.env.PUBLIC_URL + "/user"} element={<h1>user</h1>} />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

/* JSX 풀이
<Router> => Router를 사용하는방법
<Routes> => Routes는 Routes안에 작성된 Route들에게 접근 <ul>같은 느낌이라고 보자
<Route>  => Routes 안에 작성되며 <li>같은 느낌이라고 보자
            Route path 는 route(경로)를 적어주고, element 에는 렌더링할 html태그 또는 component를 적어주자
            process.env.PUBLIC_URL + 는 gh-pages에 작업물의 Route를 등록하기위해 쓴것

*/
export default App;
