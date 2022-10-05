import './sidebar.css';
import Picture from '../images/game.PNG';
import { useSelector } from 'react-redux';
export default function Sidebar() {
  const user = useSelector((state) => state.isLoggedIn);
  return (
    <div className="sidebar">
      {!user && (
        <div className="sidebarItem">
          <span className="sidebarTitle">Try Our Game</span>
          <img src={Picture} alt="game pic" />
          <div className="login-text">
            <p>
              Not a user? Register <a href="signin">Here</a>
            </p>
          </div>
        </div>
      )}
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://images.pexels.com/photos/53364/girls-women-happy-sexy-53364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
    </div>
  );
}
