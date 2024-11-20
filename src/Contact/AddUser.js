import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddUser({ handleClose }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("ADDUSERstate", state);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState("");

  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [roleIdError, setRoleIdError] = useState("");

  const [hasSubmitted, setHasSubmitted] = useState(false);



  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    if (value) {
      setUserNameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value) {
      setPasswordError("");
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    if (value) {
      setMobileNumberError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value) {
      setEmailError("");
    }
  };

  const handleRoleChange = (e) => {
    const value = e.target.value;
    setRoleId(value);
    if (value) {
      setRoleIdError("");
    }
  };


  const validateForm = () => {
    let isValid = true;

    if (!username.trim()) {
      setUserNameError("User Name is required");
      isValid = false;
    } else {
      setUserNameError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } 
    else {
      setPasswordError("");
    }


    if (!mobilenumber.trim() || !/^\d{10}$/.test(mobilenumber)) {
      setMobileNumberError("Enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setMobileNumberError("");
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {

    }

    if (!roleId) {
      setRoleIdError("Please select a role");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!validateForm()) {
      return;
    }

    console.log("Form Submitted");
    dispatch({
      type: "ADDUSERLIST",
      payload: {
        id: 0,
        username,
        password,
        mobileNumber: mobilenumber,
        email,
        roleId: Number(roleId),
      },
    });
  };

  return (
    <div className="h-screen bg-white p-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <p className="text-start font-semibold text-xl mb-2 md:mb-0">
          Inventory - User List - <span className="text-orange-600">Add User</span>
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 w-16 h-7 px-2 rounded border border-orange-600 text-orange-600 font-semibold text-sm hover:bg-orange-600 hover:text-black hover:border-black"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 w-28 h-7 px-3 rounded border border-black bg-orange-600 text-black font-semibold text-sm"
          >
            Save & Close
          </button>
        </div>
      </div>

      <div className="w-full rounded-xl shadow-custom mt-8 p-4 mb-4 h-4/5">
        <p className="font-bold text-lg text-orange-600 mb-4 font-Manrope">User Details</p>
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              User Name
            </label>
            <input
              type="text"
              value={username}
              onChange={handleUserNameChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Martin"
            />
            {hasSubmitted && usernameError && (
              <p className="text-red-500 text-xs">{usernameError}</p>
            )}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="Password"
            />
            {hasSubmitted && passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Phone Number
            </label>
            <input
              type="text"
              value={mobilenumber}
              onChange={handleMobileNumberChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="+91"
            />
            {hasSubmitted && mobileNumberError && (
              <p className="text-red-500 text-xs">{mobileNumberError}</p>
            )}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm placeholder-black"
              placeholder="example@example.com"
            />
            {hasSubmitted && emailError && (
              <p className="text-red-500 text-xs">{emailError}</p>
            )}
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block font-semibold mb-1 text-sm text-start font-SourceSansPro">
              Manager
            </label>
            <select
              value={roleId}
              onChange={handleRoleChange}
              className="w-full border border-[#BDBDBD] rounded px-3 py-2 text-sm"
            >
              <option value="">Select Role</option>
              <option value="1">Manager</option>
              <option value="2">Sales Manager</option>
              <option value="3">Admin</option>
            </select>
            {roleIdError && (
              <p className="text-red-500 text-xs">{roleIdError}</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddUser;




