import { Link, useNavigate } from "react-router-dom"


export const Customer = ({id, fullName, address, phoneNumber}) =>{
    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)

    const navigate = useNavigate()
    return <>
    { 
        tumblerUserObject.staff
            ?
            <>
            <section className="customer">
                    <div> 
                        <Link to={`/customers/${id}`}>{fullName}</Link>
                    </div>
                </section>
            </>
            : <>
             <section className="customer">
                    <div> 
                        Name: {fullName}
                    </div>
                    <div> Address: {address}</div>
                    <div> Phone Number: {phoneNumber}</div>
                </section>
                <button className="button-62" onClick={() => navigate("/account/edit")}>Edit Account</button>
            </>
    }
    </>
}

