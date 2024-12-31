import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./userList";
import UserDetails from "./userDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
=        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
