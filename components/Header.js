import { Link } from "react-router-dom";

import { IoBagOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CgPokemon } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
    return (
        <div className="header-body">
            <div className="header-logo-container">
                <Link to="/">
                    <img className="header-image-logo" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png"/>
                </Link>
            </div>
            <div>
                <ul className="nav-list">
                    <li><IoSearchSharp/> Search</li>
                    <li><BiSolidOffer/> Offers</li>
                    <li><Link to="/help">
                        <>
                            <CgPokemon/> Help
                        </>
                        </Link>
                    </li>
                    <li><IoPersonSharp/> Sign In</li>
                    <li><IoBagOutline/> Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header