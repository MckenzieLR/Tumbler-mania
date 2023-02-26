import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            fetch(`https://tumbler-mania-db.herokuapp.com/customers?_expand=user&id=${customerId}`)
            .then(response => response.json())
            .then((data) => {
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)
            })
        },
        [customerId]
    )

    return <section className="customer">
    <header className="customer_header">{customer?.user?.fullName}</header>
    <div> Address: {customer.address}</div>
    <div> Phone Number: {customer.phoneNumber}</div>
    <footer className="customer_footer">Email: {customer?.user?.email}</footer>
</section>
}