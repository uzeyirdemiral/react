import { NavLink, Outlet, useNavigation } from "react-router";

function MainLayouts() {
  const navigation = useNavigation();
  return (
    <div id="main-layout">
      <header className="container">
        <h1>Course App</h1>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="courses">Courses</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main className="container">
        {navigation.state == "loading" && (
          <span>
            <i className="fa-solid fa-spinner"></i> loading...
          </span>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayouts;
