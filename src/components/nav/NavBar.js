
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
//import "./NavBar.css"

export const NavBar = () => {
    
        const localTumblerUser = localStorage.getItem("tumbler_user")
        const tumblerUserObject = JSON.parse(localTumblerUser)
    
        if(tumblerUserObject.staff) {
            return <EmployeeNav/>
        }
        else {
            return <CustomerNav/>
        }
    }

