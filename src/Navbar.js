// import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({isLoggedIn}) =>{
    const [inputValue,setInputValue] = useState();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    
      // const handleLogout = () => {
      //   localStorage.removeItem('USER_LOGGED_IN_STATUS');
        
      // };
    
      const handleSearch = () => {
        if (inputValue.trim() !== '') {
          navigate(`/search?query=${encodeURIComponent(inputValue)}`);
        }
      };
    
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };
    
   
    return(
        <>
       <nav className="d-flex align-items-center justify-content-between mx-4 my-3">
                <div className="d-flex gap-4 fw-semibold">
                    <Link to="/"><div>HOME</div></Link>
                    {
                        isLoggedIn?
                        <Link > LOGOUT</Link>
                        :
                        <Link to="/login">LOGIN</Link>
                    }
                </div>
                <div className="border-2 border-dark-subtle border-bottom ">
                    <CiSearch  className="mx-1" onClick={handleSearch} />
                    <input style={{ border: 'none' }} className="" type="search" placeholder="Search user" onChange={handleChange} onKeyPress={handleKeyPress}/>
                </div>
                
            </nav>
        </>
    )
}
export default Navbar;