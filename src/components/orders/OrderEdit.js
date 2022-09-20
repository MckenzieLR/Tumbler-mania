import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export const EditOrderForm = () => {
    // TODO: Provide initial state for account

    const Navigate = useNavigate()
   
   

    const [order, updateOrder] = useState({
        description: "",
        personalization: "",
        userId: 0
    })

    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)

   const {orderId} = useParams()

    // TODO: Get employee account info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/customerOrders?id=${orderId}`)
            .then(response => response.json())
            .then((data) => {
                const orderObject = data[0]
                updateOrder(orderObject)

            })
    }, [])



    const [feedback, setFeedback] = useState("")

useEffect(() => {
    if (feedback !== "") {
        // Clear feedback to make entire element disappear after 3 seconds
        setTimeout(() => setFeedback(""), 3000);
    }
}, [feedback])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

       return fetch(`http://localhost:8088/customerOrders/${order.id}`, {
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(order)
       })
       .then(response => response.json())
       .then(() => {
            Navigate("/orders")
       })
       .then(() => {
        setFeedback("Order successfully Updated")
    })
    }

    return (
        <>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
    {feedback}
</div>
        <form className="order">
            <h2 className="account__title">Edit Order</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={order.description}
                        onChange={
                            (evt) => {
                                const copy = {...order}
                                copy.description = evt.target.value
                                updateOrder(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="personalization">Personalization:</label>
                    <input type="text"
                        className="form-control"
                        value={order.personalization}
                        onChange={
                            (evt) => {
                                const copy = {...order}
                                copy.personalization = evt.target.value
                                updateOrder(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Order
            </button>
        </form>
        </>
    )
}

