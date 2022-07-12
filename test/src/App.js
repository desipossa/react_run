import Header from './Header';
import Main from './Main';
import CountUp from './CountUp';
import ToggleClass from './ToggleClass';
import Tab01 from './Tab01';
import Map from './Map';
import NotFound from './NotFound';
import CreateUser from './MapCreate';
import UserList from './UserLIst';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const Nid = useRef(1);
  const onCreate = () => {
    const user = {
      id: Nid.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });
    Nid.current += 1
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route path="/CountUp" element={<CountUp />}></Route>
          <Route path="/Map" element={<Map />}></Route>
          <Route path="/ToggleClass" element={<ToggleClass />}></Route>
          <Route path="/Tab01" element={<Tab01 />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
    </div>

  );
}

export default App;
