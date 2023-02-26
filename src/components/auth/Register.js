import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    isStaff: false,
  });
  let navigate = useNavigate();

  const registerNewUser = () => {
    return fetch("https://tumbler-mania-db.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((createdUser) => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem(
            "tumbler_user",
            JSON.stringify({
              id: createdUser.id,
              staff: createdUser.isStaff,
            })
          );

          registerNewCustomer(createdUser.id);
        }
      });
  };
  const localTumblerUser = localStorage.getItem("tumbler_user");
  const tumblerUserObject = JSON.parse(localTumblerUser);

  const [customer, setCustomer] = useState({
    userId: 0,
    address: "",
    phoneNumber: "",
  });

  const registerNewCustomer = (userId) => {
    customer.userId = userId;
    return fetch("https://tumbler-mania-db.herokuapp.com/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then(navigate("/home"));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    return fetch(`https://tumbler-mania-db.herokuapp.com/users?email=${user.email}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.length > 0) {
          // Duplicate email. No good.
          window.alert("Account with that email address already exists");
        } else {
          // Good email, create user.
          registerNewUser();
        }
      });
  };

  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };

  const updateCustomer = (evt) => {
    const copy = { ...customer };
    copy[evt.target.id] = evt.target.value;
    setCustomer(copy);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">
          Please Register for Tumbler Mania
        </h1>
        <fieldset>
          <label className="formName" htmlFor="fullName"> Full Name </label>
          <input
            onChange={updateUser}
            type="text"
            id="fullName"
            className="form-control"
            placeholder="Enter your name"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label className="formName" htmlFor="email"> Email address </label>
          <input
            onChange={updateUser}
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            required
          />
        </fieldset>
        <fieldset>
          <label className="formName" htmlFor="address"> Address </label>
          <input
            onChange={updateCustomer}
            type="address"
            id="address"
            className="form-control"
            placeholder="Address"
            required
          />
        </fieldset>
        <fieldset>
          <label className="formName" htmlFor="phoneNumber"> Phone Number </label>
          <input
            onChange={updateCustomer}
            type="phoneNumber"
            id="phoneNumber"
            className="form-control"
            placeholder="Phone number"
            required
          />
        </fieldset>
        <fieldset>
          <input
            onChange={(evt) => {
              const copy = { ...user };
              copy.isStaff = evt.target.checked;
              setUser(copy);
            }}
            type="checkbox"
            id="isStaff"
          />
          <label className="formName" htmlFor="email"> I am an employee </label>
        </fieldset>
        <fieldset>
          <button className="button-62 btn-primary" type="submit">
            {" "}
            Register{" "}
          </button>
        </fieldset>
      </form>
    </main>
  );
};

//     return
//     fetch("http://localhost:8088/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//      .then((res) => res.json())
//       .then(createdUser => {
//           if (createdUser.hasOwnProperty("id")) {
//               localStorage.setItem("tumbler_user", JSON.stringify({
//                   id: createdUser.id,
//                   staff: createdUser.isStaff
//               }))
//       .then(
//         (user) => {
//           customerToSendToAPI.userId = user.id;
//         })
//   }
