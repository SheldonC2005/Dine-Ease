import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="text-wrapper">
        <button>Menu</button>
      </div>
      <div className="div">
        <button>Feedback</button></div>
      <div className="text-wrapper-2">
        <button>About</button></div>
    </div>
  );
};
 export default NavBar;