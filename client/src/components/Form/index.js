import React, { useState } from "react";
import "./form.css";
import { submitResponse } from "../../utils/api";

function Form() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    streetAddress2: "",
    state: "",
    country: "",
    zip: "",
    birthday: "",
    sex: "",
    maritalStatus: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState);

    submitResponse(formState)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-main-wrapper">
      <div className="form-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-form-title">
            <h2 className="">Patient Registration</h2>
            <p>Fill out the form below to register!</p>
          </div>

          <div className="form-input-flex">
            <div>
              <label htmlFor="firstName" className="form-form-label">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-form-input"
                required
                value={formState.firstName}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="form-form-label">
                {" "}
                Last name{" "}
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-form-input"
                required
                value={formState.lastName}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="form-input-flex">
            <div>
              <label htmlFor="email" className="form-form-label">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-form-input"
                required
                value={formState.email}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="phone" className="form-form-label">
                {" "}
                Phone number{" "}
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-form-input"
                required
                value={formState.phone}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="form-mb-3">
            <label htmlFor="streetAddress" className="form-form-label">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              className="form-form-input"
              required
              value={formState.streetAddress}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-mb-3">
            <label htmlFor="streetAddress2" className="form-form-label">
              Street Address Line 2
            </label>
            <input
              type="text"
              name="streetAddress2"
              id="streetAddress2"
              className="form-form-input"
              value={formState.streetAddress2}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-input-flex">
            <div>
              <label htmlFor="state" className="form-form-label">
                {" "}
                State{" "}
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="form-form-input"
                required
                value={formState.state}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="country" className="form-form-label">
                {" "}
                Country{" "}
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="form-form-input"
                required
                value={formState.country}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="form-input-flex">
            <div>
              <label htmlFor="zip" className="form-form-label">
                {" "}
                Zip Code{" "}
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                className="form-form-input"
                required
                value={formState.zip}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="birthday" className="form-form-label">
                {" "}
                Birth Date{" "}
              </label>
              <input
                type="date"
                name="birthday"
                id="birthday"
                className="form-form-input"
                required
                value={formState.birthday}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="form-input-group">
            <label className="form-form-label">Sex</label>

            <select
              className="form-form-select"
              name="sex"
              id="sex"
              required
              value={formState.sex}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-input-radio-wrapper">
            <label htmlFor="maritalStatus" className="form-form-label">
              What is your marital status?
            </label>

            <div className="form-radio-flex">
              <div className="form-radio-group">
                <label className="form-radio-label">
                  <input
                    className="form-input-radio"
                    type="radio"
                    name="maritalStatus"
                    id="maritalStatus"
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        setFormState({
                          ...formState,
                          [e.target.name]: "Single",
                        });
                      }
                    }}
                  />
                  Single
                  <span className="form-radio-checkmark"></span>
                </label>
              </div>

              <div className="form-radio-group">
                <label className="form-radio-label">
                  <input
                    className="form-input-radio"
                    type="radio"
                    name="maritalStatus"
                    id="maritalStatus"
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        setFormState({
                          ...formState,
                          [e.target.name]: "Married",
                        });
                      }
                    }}
                  />
                  Married
                  <span className="form-radio-checkmark"></span>
                </label>
              </div>

              <div className="form-radio-group">
                <label className="form-radio-label">
                  <input
                    className="form-input-radio"
                    type="radio"
                    name="maritalStatus"
                    id="maritalStatus"
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        setFormState({
                          ...formState,
                          [e.target.name]: "Widowed",
                        });
                      }
                    }}
                  />
                  Widowed
                  <span className="form-radio-checkmark"></span>
                </label>
              </div>

              <div className="form-radio-group">
                <label className="form-radio-label">
                  <input
                    className="form-input-radio"
                    type="radio"
                    name="maritalStatus"
                    id="maritalStatus"
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        setFormState({
                          ...formState,
                          [e.target.name]: "Divorced",
                        });
                      }
                    }}
                  />
                  Divorced
                  <span className="form-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <button className="form-btn" type="submit">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
