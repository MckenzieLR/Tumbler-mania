import { Link, useNavigate } from "react-router-dom"
import "./nav.css"

export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className="navigation">
        <ul className="navbar nav-type">
            <a className="active">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            </a>
            <a className="active">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/account">Account</Link>
            </li>
            </a>
            {
                localStorage.getItem("tumbler_user")
                    ? <a className="active"> 
                        <li className="navbar__item active ">
                        <Link className="navbar__link active customer__logout" to="" onClick={() => {
                            localStorage.removeItem("tumbler_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    </a>
                    : ""
            }
        </ul>
        </div>
              <noscript>
              <div class="first-line">
                <div class="linear">
                  <div class="line-w5">
                    
                  </div>
                </div>
              </div>
              </noscript>
      <div class="flash-fluid">
        <div class="flash-time">
          <div class="flash-GIF">
            
          </div>
        </div>
       </div>
<noscript>     
      <div class="cyrcle-center">
        <div class="radial-cyrcle">
          
        </div>
      </div>
</noscript>
              </>
    )
}