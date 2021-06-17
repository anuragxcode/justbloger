import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"
import "./topbar.css";


export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout =()=>{
        dispatch({type: "LOGOUT"});
    };
    return (
        <div className="top">
            <div className="topLeft">              
            <a href="https://github.com/anuragxxi" target="_blank">
                <i className="topIcon fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/anuragxxi/" target="_blank">
                <i className="topIcon fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/anuragxxi" target="_blank">
                 <i className="topIcon fab fa-twitter-square"></i>
            </a>              
            <a href="https://www.linkedin.com/in/anurag-singh-001/" target="_blank">
                 <i className="topIcon fab fa-linkedin"></i>
            </a>
                 
            </div>
            
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    
                     <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>                   
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>            
            </div>
            <div className="topRight">
                
                {
                    user ? (
                    <Link to="/settings">
                        <img className="topImg" src={PF + user.profilePic} alt="" />
                    </Link>
                    ):(
                        <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                            LOGIN
                            </Link>
                        </li>
                        <li className="topListItem"> 
                            <Link className="link" to="/register">
                            REGISTER
                            </Link>
                        </li>
                        </ul>
                    )
                }
            
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
 