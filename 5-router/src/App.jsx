import { BrowserRouter, Routes, Route, Link, HashRouter, MemoryRouter, NavLink, Navigate } from "react-router-dom";

import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/postitem";

import Users from "./components/users";
import Admins from "./components/admins";
import Guests from "./components/guests";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 b-4 border-bottom">
          <Link to='/' className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4">My app</span>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='posts' className="nav-link">Posts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={{
                pathname: 'profile',
                hash: '#francis',
                search: '?profile=true'
              }} className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='users' className="nav-link">Users</NavLink>
            </li>
          </ul>
        </header>
        <br/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='posts' element={<Posts />} />
          <Route path='posts/:id' element={<PostItem />} />
          <Route path='profile' element={<Profile />} />

          <Route path='users' element={<Users />}>
            <Route path='guests' element={<Guests />} />
            <Route path='admins' element={<Admins />} />
          </Route>

          {/* <Route path='profile' element={
            <>
              <Navigate replace to="/"/>
            </>
          } /> */}
          <Route path='*' element={
            <>
              <h1>Sorry nothing found</h1>
            </>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;