import { FaChevronLeft } from "react-icons/fa";
import "styles/components/__navbar.scss";

export const Navbar = ({ title }: INavbarProps) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-lg-3 px-md-3 px-sm-0">
      <div className="col-4">
        <button className="btn" hidden={title.toLowerCase() === "home"}>
          <FaChevronLeft className="icon" />
          <span className="icon-label">Back</span>
        </button>
      </div>
      <h6 className="title col-4 capitalize">{title}</h6>
      <div className="title col-4"></div>
    </nav>
  );
};

interface INavbarProps {
  title: string;
}
