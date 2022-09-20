import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Order } from "./Order"

export const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFiltered] = useState([])
    const [employees, setEmployees] = useState([])
    const [completed, setCompleted] = useState(false)
    const [pendingOnly, updatePendingOnly] = useState(false)
    const navigate = useNavigate()
    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)

    useEffect(
        () => {
            if (completed){ 
                const completedOrders = orders.filter(order => order.complete === true && order.customerId === tumblerUserObject.customerId)
                setFiltered(completedOrders)
            }
        },
        [completed]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/customerOrders?_embed=employeeTickets`)
                .then(response => response.json())
                .then((orderArray) => {
                    setOrders(orderArray)

                })

            fetch(`http://localhost:8088/employees?_expand=user`)
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
            const myOrders = orders.filter(order => order.customerId === tumblerUserObject.customerId)
            setFiltered(myOrders)
        }
    },
    [orders]
)

useEffect(
    () => {
        if(pendingOnly){
        const pendingTicketsArray = orders.filter(order => {
            return order.customerId === tumblerUserObject.customerId && order.dateCompleted === ""
        })
        setFiltered(pendingTicketsArray)
        
    }
    else {
        const myOrders = orders.filter(order => order.customerId === tumblerUserObject.customerId)
        setFiltered(myOrders)
    }
    },
    [pendingOnly]
)

return <> 
{
    tumblerUserObject.staff
    ? ""
    : <>
     <button onClick={() => {
         setCompleted(false)
         updatePendingOnly(false)}}>All Orders</button>
    <button onClick={() => updatePendingOnly(!pendingOnly)}>Pending Orders</button>
    <button onClick={() => setCompleted(!completed)}>Previous Orders</button>
    </>
}

<h2>Orders</h2>

<article className="orders">
    {
       filteredOrders.map(order => <Order key={`order--${order.id}`} emplpoyees={employees} getAllOrders={orders} currentUser={tumblerUserObject} id={order.id} orderObject={order} />)
    }
</article>

</>

}