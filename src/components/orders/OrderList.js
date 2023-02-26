import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Order } from "./Order"

export const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFiltered] = useState([])
    const [employees, setEmployees] = useState([])
    const [completed, setCompleted] = useState(false)
    const [pendingOnly, updatePendingOnly] = useState(false)
    const [claimedOnly, updateClaimedOnly] = useState(false)
    const [employeePendingOnly, updateEmployeePendingOnly] = useState(false)
    const [employeeCompleted, setEmployeeCompleted] = useState(false)
    const navigate = useNavigate()
    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)


    useEffect(
        () => {
            if (completed){ 
                const completedOrders = orders.filter(order => order.complete === true && order.customerId === customer[0].id)
                setFiltered(completedOrders)
            }
        },
        [completed]
    )

    const [customer, setCustomers] = useState([{}])

    const getAllOrders = () => {
        fetch(`https://tumbler-mania-db.herokuapp.com/customerOrders?_embed=employeeTickets`)
        .then(response => response.json())
        .then((orderArray) => {
            setOrders(orderArray)

        })
    }

    useEffect(
        () => {
            fetch(`https://tumbler-mania-db.herokuapp.com/customers?userId=${tumblerUserObject.id}`)
            .then(res => res.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })

          getAllOrders()

            fetch(`https://tumbler-mania-db.herokuapp.com/employees?_expand=user`)
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
    },
    []
)

useEffect(
    () => {
        if (tumblerUserObject.staff) {
            setFiltered(orders)
        }
        else {
            const myOrders = orders.filter(order => order.customerId === customer[0].id)
            setFiltered(myOrders)
        }
    },
    [orders]
)

useEffect(
    () => {
        if(pendingOnly){
        const pendingTicketsArray = orders.filter(order => {
            return order.customerId === customer[0].id && order.dateCompleted === ""
        })
        setFiltered(pendingTicketsArray)
        
    }
    else {
        const myOrders = orders.filter(order => order.customerId === customer[0].id)
        setFiltered(myOrders)
    }
    },
    [pendingOnly]
)

useEffect(
    () => {
        if(claimedOnly){
        const claimedTicketsArray = orders.filter(order => {
            return order.claimed === true
        })
        setFiltered(claimedTicketsArray)
        
    }
    else {
        const allOrders = orders
        setFiltered(allOrders)
    }
    },
    [claimedOnly]
)

useEffect(
    () => {
        if (employeeCompleted){ 
            const employeeCompletedOrders = orders.filter(order => order.complete === true)
            setFiltered(employeeCompletedOrders)
        }
        else {
            const allOrders = orders
            setFiltered(allOrders)
        }
    },
    [employeeCompleted]
)

useEffect(
    () => {
        if(employeePendingOnly){
        const EmployeePendingTicketsArray = orders.filter(order => {
            return order.dateCompleted === "" && order.claimed === false
        })
        setFiltered(EmployeePendingTicketsArray)
    }
    else {
        const allOrders = orders
        setFiltered(allOrders)
    }
    },
    [employeePendingOnly]
)



return <> 
{
    tumblerUserObject.staff
    ? <>
         <button className="button-62" onClick={() => {
         setEmployeeCompleted(false)
         updateEmployeePendingOnly(false)
         updateClaimedOnly(false)}}>All Orders</button>
    <button className="button-62" onClick={() => updateEmployeePendingOnly(!employeePendingOnly)}>Pending Orders</button>
    <button className="button-62" onClick={() => updateClaimedOnly(!claimedOnly)}>Claimed Orders</button>
    <button className="button-62" onClick={() => setEmployeeCompleted(!completed)}>Completed Orders</button>
    </>
    : <>
     <button className="button-62" onClick={() => {
         setCompleted(false)
         updatePendingOnly(false)}}>All Orders</button>
    <button className="button-62" onClick={() => updatePendingOnly(!pendingOnly)}>Pending Orders</button>
    <button className="button-62" onClick={() => setCompleted(!completed)}>Previous Orders</button>
    </>
}


<h2 className="ordersHeader">Orders</h2>

<article className="orders">
    {
       filteredOrders.map(order => <Order key={`order--${order.id}`} employees={employees} getAllOrders={getAllOrders} currentUser={tumblerUserObject} id={order.id} orderObject={order} />)
    }
</article>


</>

}