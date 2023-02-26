import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const CustomerProfile = () =>{

    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)

    const [customer, updateCustomer] = useState({})
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`https://tumbler-mania-db.herokuapp.com/customers?_expand=user&userId=${tumblerUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)
            })
        },
        []
    )


    return <>
     <section className="customer">
                    <div> 
                        Name: {customer?.user?.fullName}
                    </div>
                    <div> Address: {customer.address}</div>
                    <div> Phone Number: {customer.phoneNumber}</div>
                </section>
                <button className="button-62" onClick={() => navigate("/account/edit")}>Edit Account</button>
                <button className="button-62" onClick={() => navigate("/orders")}>Show Orders</button>
            </>
}

