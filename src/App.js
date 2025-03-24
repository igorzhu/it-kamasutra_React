import { Routes, Route } from "react-router";
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/Preloader/Preloader";
import LoginPage from "./components/Login/Login"

function App(props) {

  return (
      <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="main-content">
              <Routes>
                  <Route path="profile" element={<ProfileContainer />} />
                  <Route path="profile/:userId" element={<ProfileContainer />}>
                      (/*<Route path="*" element={<Preloader />} />*/)
                  </Route>
                  <Route path="messages" element={<DialogsContainer />} />
                  <Route path="users" element={<UsersContainer />} />
                  <Route path="login" element={<LoginPage />} />
              </Routes>
          </div>
      </div>
  );
}

export default App;
