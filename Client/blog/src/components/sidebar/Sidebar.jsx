import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import profilePic from "../images/img.jpeg"


export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async () =>
        {
            const res = await axios.get("/categories");
            setCats(res.data)
        };
        getCats();
    },[]);
    return ( 
    <div className = "sidebar" >
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME</span> 
                <img 
                src={profilePic}
                alt = "" 
            />
                <p>
                I am sophomore computer engineering undergraduate pursuing bachelor of engineering at gujarat technological university. 
                I have passion for putting small pieces of digital artwork together into a wonderful experience.
                I spend my time exploring and experimenting new technologies
                I'm a hardworking individual, honest, sincere, 
                trustworthy and responsible to the assigned task.
                </p>
        </div>
        
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
                
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
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
        </div> 
 
    </div>
    )
}