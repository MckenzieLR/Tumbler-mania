import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./orders.css"
export const OrderForm = () => {


    const [order, update] = useState({
        size: "",
        color: "",
        description: "",
        personalization: ""

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)



    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API

    const orderToSendToAPI = {
        customerId: parseInt(customer[0].id),
        description: order.description,
        tumblerSizeId: parseInt(order.size),
        glitterColorId: parseInt(order.color),
        personalization: order.personalization,
        complete: false,
        claimed: false,
        dateCompleted: ""
    }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/customerOrders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/orders")
            })
    }

    const [customer, setCustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?userId=${tumblerUserObject.id}`)
            .then(res => res.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        }, []
    )

   // console.log(customer,"" )
    // const findCustomerId = () => {
    //     customers.map(
    //         (customer) => {
    //      if(customer.userId === tumblerUserObject.id){
    //          return customer.id
    //      }
    //     })
    // }

    // console.log("customer id",findCustomerId())
    //const customerId = findCustomerId()

    const [colors, setColors] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/glitterColors`)
            .then(res => res.json())
            .then((colorArray) => {
                setColors(colorArray)
            })
        }, []
    )

    const [sizes, setSizes] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/tumblerSizes`)
            .then(res => res.json())
            .then((sizeArray) => {
                setSizes(sizeArray)
            })
        }, []
    )

    return (
        <form className="orderForm">
            <h2 className="orderForm__title">New Tumbler Order</h2>
            <fieldset>
                <div className="form-group">
                    <label className="formName" htmlFor="description">Description:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description"
                        value={order.description}
                        onChange={
                            (evt) => {
                                const copy = {...order}
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="formName" htmlFor="type">Glitter Color</label>
                    <select className="glitterSelect" value={order.color}
                        onChange={
                            (evt) => {
                                const copy = {...order}
                                copy.color= evt.target.value
                                update(copy)
                            }
                        } >
                        <option value="0">Choose glitter color and type </option>
                        {
                        colors.map(
                            (color) => {
                                return <option key={`glitterColor--${color.id}`}
                                        value={color.id}>{color.color} {color.type} glitter</option>
                            }
                        )
                    }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="formName" htmlFor="type">Tumbler Size</label>
                    <select className="sizeSelect" value={order.size}
                        onChange={
                            (evt) => {
                                const copy = {...order}
                                copy.size= evt.target.value
                                update(copy)
                            }
                        } >
                        <option value="0">Choose tumbler size and style</option>
                        {
                        sizes.map(
                            (size) => {
                                return <option key={`tumblerSize--${size.id}`}
                                        value={size.id}>{size.size} {size.style} </option>
                                
                            }
                        )
                    }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="formName" htmlFor="personalization">Personalization:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter name here"
                        value={order.personalization}
                        onChange={
                            (evt) => {
                                const copy = {...order}
                                copy.personalization = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary button-62">
                Submit Order
            </button>
        </form>
    )
}