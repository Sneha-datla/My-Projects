import React from "react";
import { Link } from "react-router-dom";
const BlogsDetails =()=>{
   return (
    <div>
        <ul className="submenu">
                        <li><Link className="sub-b" to="/Blog">Blog</Link></li>
                        <li><Link className="sub-b" to="/blogright">Blog List Right Sidebar</Link></li>
                        <li><Link className="sub-b" to="/blogleft">Blog List Left Sidebar</Link></li>
                        <li><Link className="sub-b" to="/blogdetailed">Blog Details</Link></li>
                      </ul>
    </div>

    );
};
export default BlogsDetails;