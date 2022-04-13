//packages
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navigator from './components/Navigator'
import Footer from './components/Footer'

//views
import Home from "./views/Home";
import ToDoList from './views/ToDoList';
import Progress from './views/Progress';
import Error from "./views/Error";

function App() {
  return (
    <>
      <Navigator/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ToDoList" element={<ToDoList />} />
          <Route path="Progress" element={<Progress />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;