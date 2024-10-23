import Logo from "../assets/logo.svg";
import Search from "../assets/search.svg";
import Profile from "../assets/profile.svg";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      {/* Links */}
      <div>
        <ul className="flex gap-12">
          <li>
            <a className="navlinks" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navlinks" href="#">
              Recipes
            </a>
          </li>
          <li>
            <a className="navlinks" href="#">
              About
            </a>
          </li>
          <li>
            <a className="navlinks" href="#">
              Search
            </a>
          </li>
        </ul>
      </div>
      {/* Seach & Profile */}
      <div className="flex gap-4">
        <label className="relative">
          <input className="input-seach" type="text" />
          <img
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[10%]"
            src={Search}
            alt=""
          />
        </label>
        <img className="p-2 bg-primary rounded-full cursor-pointer" src={Profile} alt="" />
      </div>
    </nav>
  );
};

export default Header;
