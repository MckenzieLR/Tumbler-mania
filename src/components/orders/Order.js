import { Link, useNavigate, useParams } from "react-router-dom"

export const Order = ( {orderObject, currentUser, employees, getAllOrders} ) => {

    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)

    const {orderId} = useParams()

    const navigate = useNavigate()

    let assignedEmployee = null
    if (orderObject.employeeTickets.length > 0) {
        const orderEmployeeRelationship = orderObject.employeeTickets[0]
        assignedEmployee = employees.find(employee => employee.id === orderEmployeeRelationship.employeeId)
    }

    const CompleteTicket = () => {
        if (currentUser.staff &&  orderObject.dateCompleted === "") {
            return <button onClick={CompletedTicket} className="order_completed"> Completed</button>
        }
        else {
            return ""
        }
    }

    const CompletedTicket = () => {
        const copy = {
            customerId: parseInt(orderObject.customerId),
            description: orderObject.description,
            tumblerSizeId: parseInt(orderObject.tumblerSizeId),
            glitterColorId: parseInt(orderObject.glitterColorId),
            personalization: orderObject.personalization,
            complete: true,
            claimed: true,
            dateCompleted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        }

        return fetch(`http://localhost:8088/customerOrders/${orderObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(copy)
        })
        .then(response => response.json())
        .then()
    }

    const deleteButton = () => {
        if(currentUser.staff &&  orderObject.dateCompleted === ""){
        return <button onClick ={() => {
            fetch(`http://localhost:8088/customerOrders/${orderObject.id}`, {
                method: "DELETE"
            })
            .then(() => {
                
            })
        }} className="ticket_delete"> Delete</button>
        }
        else {
            return ""
        }


    }

    const editButton = () => {
        if(!currentUser.staff && orderObject.dateCompleted === ""){
            return <button onClick={() => navigate(`/order/edit/${orderObject.id}`)}>Edit Order</button>
        }
    }


    return <section className="order" key={`order--${orderObject.id}`}>
    <header> Order {orderObject.id} </header>
    <section>Description: {orderObject.description}</section>
    <section>Personalization: {orderObject.personalization}</section>
    <section> Date Completed: {orderObject.dateCompleted }</section>
    <footer> 
        {
            currentUser.staff
            ? <>
            {CompleteTicket()}
            {deleteButton()}
            </>
            : <>{editButton()}
            </>
        }
    </footer>
</section>
}

