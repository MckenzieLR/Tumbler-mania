import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"

export const ApplicationViews = () => {
    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)

	if(tumblerUserObject.staff) {
		return <EmployeeViews/>
	}
	else {
		return <CustomerViews/>
	}
}