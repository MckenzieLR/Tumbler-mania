import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



export const CustomerForm = () => {
    // TODO: Provide initial state for account

    const Navigate = useNavigate()

    const [account, updateAccount] = useState({
        address: "",
        phoneNumber: "",
        userId: 0
    })

    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)


    // TODO: Get employee account info from API and update state
    useEffect(() => {
        fetch(`https://tumbler-mania-db.herokuapp.com/customers?userId=${tumblerUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const customerObject = data[0]
                updateAccount(customerObject)

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

       return fetch(`https://tumbler-mania-db.herokuapp.com/customers/${account.id}`, {
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(account)
       })
       .then(response => response.json())
       .then(() => {
            Navigate("/account")
       })
       .then(() => {
        setFeedback("Customer account successfully saved")
    })
    }

    return (
        <>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
    {feedback}
</div>
        <form className="account">
            <h2 className="account__title">Edit Account</h2>
            <fieldset>
                <div className="form-group">
                    <label className="formName addressBox" htmlFor="address">Address:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={account.address}
                        onChange={
                            (evt) => {
                                const copy = {...account}
                                copy.address = evt.target.value
                                updateAccount(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="formName" htmlFor="name">Phone Number:</label>
                    <input type="text"
                        className="form-control"
                        value={account.phoneNumber}
                        onChange={
                            (evt) => {
                                const copy = {...account}
                                copy.phoneNumber = evt.target.value
                                updateAccount(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary button-62">
                Save Account
            </button>
        </form>
        </>
    )
}