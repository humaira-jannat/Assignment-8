import { useState } from "react";
import {useLocation, useNavigate} from "react-router";
 function Navbar() {
    const [isMenuOpen, SetIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const navLinkClass = (path) =>
        location.pathname.startsWith(path)
    ? "text-primary font-semibold border-b-2 border-purple-400"
    :  "text-gray-700 hover:text-gray-700 hover:border-b-2 hover:border-purple-400";
    return(
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">

            {/*left section-logo*/}
            <div className="flex-1 ">
                <button
                className="flex items-center gap-2"
                onClick={() => navigate ("/")}>
                    <img 
                    src="images/logo.png" alt="hero.io logo"
                    className="w-8 h-8 object-contain"/>
                    <span className="font-bold text-xl text-primary">HERO.IO</span>
                    </button>
            </div>
        
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">

                <ul className="menu menu-horizontal px-1 space-x-8">
                    <li>
                        <button
                        className={navLinkClass ("/")}
                        onClick={() => navigate("/")}>
                            Home
                        </button>
                    </li>
                    <li><button
          className={navLinkClass("/all-apps")}
         onClick={() => navigate("/all-apps")}>
                Apps
            </button>
              </li>
                   
                    <li>
                        <button
                        className={navLinkClass ("/my-installations")}
                        onClick={() => navigate ("/my-installations")}>
                          Installation
                          </button>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex">
                <a href="https://github.com/humaira-jannat" target ="_blank" 
                rel="noopener noreferrer"
                className="btn w-full text-white bg-gradient-to-r from-[#5A3DD9] to-[#9B7BFF] border-none flex items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                         <path
             fillRule="evenodd"
             d="M12 2C6.477 2 2 6.484 2 12.014c0 4.424 2.865 8.179 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.947 0-1.092.39-1.985 1.03-2.683-.104-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0 1 12 6.844a9.54 9.54 0 0 1 2.505.337c1.91-1.296 2.75-1.026 2.75-1.026.544 1.376.202 2.393.099 2.646.64.698 1.03 1.591 1.03 2.683 0 3.844-2.339 4.692-4.566 4.94.36.31.682.921.682 1.855 0 1.338-.012 2.42-.012 2.747 0 .268.18.579.688.48A10.016 10.016 0 0 0 22 12.014C22 6.484 17.523 2 12 2z"
             clipRule="evenodd"
    />
                    </svg>
                    Contribute
                </a>
            </div>
            {/*mobile view*/}
            <div className="flex-none md:hidden">
                <div
                tabIndex ={0}
                role="button"
                className="btn btn-ghost"
                onClick={()=> SetIsMenuOpen(!isMenuOpen)}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#7b61ff">
                        <path strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </div>
                {isMenuOpen && (
                    <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        <li>
                            <button
                            className={navLinkClass("/")}
                            onClick={() => {
                                navigate("/");
                                SetIsMenuOpen(false);
                            }}>
                                Home
                            </button>
                        </li>
                        <li>
                       <button
  className={navLinkClass("/all-apps")}
  onClick={() => {
    navigate("/all-apps");
    SetIsMenuOpen(false);
  }}
>
  Apps
</button>

                        </li>
                        <li>
                        <button
                        className={navLinkClass("/my-installations")}
                        onClick={()=> {
                            navigate("/my-installations");
                            SetIsMenuOpen(false);
                        }}>
                            Installation
                        </button>
                        </li>
                        <li>
                            <a
                            href="https://github.com/humaira-jannat"
                            target="_blank"
                            className="text-primary"
                            onClick={() => SetIsMenuOpen(false)}>
                                Contribute
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
export default Navbar;
