import React from "react";
import { NavLink, Outlet } from "react-router";

function HelpLayouts() {
  return (
    <div id="help-layout">
      <h1>HelpLayouts</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa saepe
        magnam adipisci dolore quam odio ducimus beatae quas tempore quos veniam
        autem, doloribus quis, laudantium omnis assumenda asperiores itaque.
        Quibusdam?
      </p>
      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">FAQ</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayouts;
