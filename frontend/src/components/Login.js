import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import { getLoginEmployee, setNewEmployee } from "../service";

const Login = () => {
  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassowrd] = useState("");

  const [hideloginmessage, setHideLoginMessage] = useState(false);

  const [hideeregmessage, setHideERegMessage] = useState(false);

  const [valEmail, setValEmail] = useState("");
  const [valPassword, setValPassword] = useState("");

  const [hideError1, setHideError1] = useState(false);
  const [hideError2, setHideError2] = useState(false);

  const [inputShadow1, setInputShadow1] = useState(false);
  const [inputShadow2, setInputShadow2] = useState(false);

  const [hideRegForm, setHideRegForm] = useState(false);

  const [efname, setEFName] = useState("");
  const [elname, setELname] = useState("");
  const [econtactno, setEContactNo] = useState("");
  const [egender, setEGender] = useState("");
  const [eemail, setEEmail] = useState("");
  const [enpassword, setENPassword] = useState("");
  const [ecpassword, setECPassword] = useState("");
  const [eage, setEAge] = useState("");
  const [enationality, setENationality] = useState("");
  const [enic, setENic] = useState("");
  const [ereligion, setEReligion] = useState("");
  const [eimage, setEImage] = useState(null);

  const [errorEmployeeSubmit, setErrorEmployeeSubmit] = useState("");

  const clickLogin = async () => {
    if (lemail.length === 0) {
      setValEmail("empty user name");
      setHideError1(true);
      setInputShadow1(true);
    } else if (
      !lemail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      setValEmail("Inavlid user name");
      setHideError1(true);
      setInputShadow1(true);
    } else if (lpassword.length === 0) {
      setValPassword("empty password");
      setHideError2(true);
      setHideError1(false);
      setInputShadow1(false);
      setInputShadow2(true);
    } else {
      const d = await getLoginEmployee(lemail, lpassword);
      if (d !== null) {
        if (
          d.content[0].email === lemail &&
          d.content[0].passWord === lpassword
        ) {
          setInputShadow1(false);
          setInputShadow2(false);
          setHideError1(false);
          setHideError2(false);
          setValEmail("");
          setValPassword("");
          setLEmail("");
          setLPassowrd("");
          setHideLoginMessage(true);
        } else {
          setValPassword("wrong candidate1");
          setHideError1(false);
          setHideError2(true);
          setInputShadow1(true);
          setInputShadow2(true);
        }
      } else {
        setValPassword("wrong candidate2");
        setHideError1(false);
        setHideError2(true);
        setInputShadow1(true);
        setInputShadow2(true);
      }
    }
  };

  const clickLoginMessage = () => {
    setHideLoginMessage(false);
  };

  function showRegister() {
    if (hideRegForm === true) {
      setHideRegForm(false);
    } else {
      setHideRegForm(true);
    }
  }

  function clickEmployeeSubmit() {
    if (efname === null) {
      setErrorEmployeeSubmit("Null First Name");
    } else if (!efname.match(/^[A-Za-z\s]+$/)) {
      setErrorEmployeeSubmit("Inavlid First Name");
    } else if (elname === null) {
      setErrorEmployeeSubmit("Null Last Name");
    } else if (!elname.match(/^[A-Za-z\s]+$/)) {
      setErrorEmployeeSubmit("Invalid Last Name");
    } else if (econtactno === null) {
      setErrorEmployeeSubmit("Null Contact Number");
    } else if (!econtactno.match(/^\d{10}$/)) {
      setErrorEmployeeSubmit("Invalid Contact Number");
    } else if (eage === null) {
      setErrorEmployeeSubmit("Null Age");
    } else if (!eage.match(/^\d+$/)) {
      setErrorEmployeeSubmit("Inavlid Age");
    } else if (egender === null) {
      setErrorEmployeeSubmit("Null Gender Type");
    } else if (enationality === null) {
      setErrorEmployeeSubmit("Null Nationality");
    } else if (!enationality.match(/^[A-Za-z\s]+$/)) {
      setErrorEmployeeSubmit("Invalid Nationality");
    } else if (enic === null) {
      setErrorEmployeeSubmit("Null NIC");
    } else if (!enic.match(/^\d{9}[Vv]$/)) {
      setErrorEmployeeSubmit("Invalid N");
    } else if (ereligion === null) {
      setErrorEmployeeSubmit("Null Religion");
    } else if (!ereligion.match(/^[A-Za-z\s]+$/)) {
      setErrorEmployeeSubmit("Invalid Religion");
    } else if (eemail === null) {
      setErrorEmployeeSubmit("Null Email");
    } else if (
      !eemail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      setErrorEmployeeSubmit("Invalid Email");
    } else if (eimage === null) {
      setErrorEmployeeSubmit("Empty Profile");
    } else if (enpassword === null) {
      setErrorEmployeeSubmit("Null New Password");
    } else if (ecpassword === null) {
      setErrorEmployeeSubmit("Null Confirm Password");
    } else if (enpassword !== ecpassword) {
      setErrorEmployeeSubmit("Mismatch Passwords");
    } else {
      setErrorEmployeeSubmit("");
      setHideERegMessage(true);
      // const resp = setNewEmployee({
      //   firstName: efname,
      //   lastName: elname,
      //   contactNo: econtactno,
      //   age: eage,
      //   genderType: egender,
      //   nic: enic,
      //   nationality: enationality,
      //   image: "https://example.com/profile.jpg",
      //   religion: ereligion,
      //   email: eemail,
      //   passWord: ecpassword,
      // });
      // console.log(resp);
      // if (resp !== null) {
      //   alert("yes");
      // } else {
      //   alert("No");
      // }
      setEFName("");
      setELname("");
      setEAge("");
      setEContactNo("");
      setEEmail("");
      setECPassword("");
      setEGender("");
      setENationality("");
      setENic("");
      setEReligion("");
      setENPassword("");
      setEImage("");
      alert("hello");
    }
  }

  function clickEmployeeClear() {
    setEFName("");
    setELname("");
    setEAge("");
    setEContactNo("");
    setEEmail("");
    setECPassword("");
    setEGender("");
    setENationality("");
    setENic("");
    setEReligion("");
    setENPassword("");
    setEImage("");
  }

  function clickERegMessage() {
    setHideRegForm(false);
    setHideERegMessage(false);
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.749)",
        height: "197.5mm",
      }}
    >
      <div className="login-main">
        <div className="login-card">
          <div>
            <label>LOGIN</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="email"
              value={lemail}
              onChange={(e) => {
                setLEmail(e.target.value);
              }}
              style={{
                boxShadow: `${
                  inputShadow1
                    ? "0px 0px 20px rgb(255, 0, 30)"
                    : "10px 10px 10px rgb(0, 0, 0)"
                }`,
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={lpassword}
              onChange={(e) => {
                setLPassowrd(e.target.value);
              }}
              style={{
                boxShadow: `${
                  inputShadow2
                    ? "0px 0px 20px rgb(255, 0, 30)"
                    : "10px 10px 10px rgb(0, 0, 0)"
                }`,
              }}
            />
          </div>
          <div>
            <button onClick={clickLogin}>login</button>
          </div>
          <div>
            <h6 onClick={showRegister} className="txt-new-account">
              create new account
            </h6>
          </div>
        </div>
        <div
          style={{
            top: `${hideloginmessage ? "6%" : "-40%"}`,
          }}
          className="msg-login-c"
        >
          <div>
            <Link to="/home">
              <button onClick={clickLoginMessage}>x</button>
            </Link>
          </div>
          <div>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
              }}
            >
              <label onClick={clickLoginMessage}>login success</label>
            </Link>
          </div>
        </div>
        <div
          className="error-1"
          style={{
            right: `${hideError1 ? "43.2%" : "-30%"}`,
          }}
        >
          <label>{valEmail}</label>
        </div>
        <div
          className="error-2"
          style={{
            right: `${hideError2 ? "43.2%" : "-30%"}`,
          }}
        >
          <label>{valPassword}</label>
        </div>
      </div>
      <div
        className="main-employee-reg"
        style={{ top: `${hideRegForm ? "40px" : "-2000px"}` }}
      >
        <div>
          <button onClick={showRegister} className="btn-ereg-close">
            x
          </button>
        </div>
        <div className="submain-employee-reg">
          <label className="lbl-e-reg">REGISTER</label>
          <div className="submaintwo-employee-reg">
            <div>
              <input
                type="text"
                placeholder="first name"
                value={efname}
                onChange={(e) => {
                  setEFName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="last name"
                value={elname}
                onChange={(e) => {
                  setELname(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="contact no"
                value={econtactno}
                onChange={(e) => {
                  setEContactNo(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="age"
                value={eage}
                onChange={(e) => {
                  setEAge(e.target.value);
                }}
              />
            </div>
            <div className="submainthree-employee-reg">
              <div>
                <label
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  Gender Type
                </label>
              </div>
              <div>
                <select
                  value={egender}
                  onChange={(e) => {
                    setEGender(e.target.value);
                  }}
                >
                  <option value={""}>Select</option>
                  <option value={"MALE"}>Male</option>
                  <option value={"FEMALE"}>Female</option>
                </select>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="nationality"
                value={enationality}
                onChange={(e) => {
                  setENationality(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="nic"
                value={enic}
                onChange={(e) => {
                  setENic(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="religion"
                value={ereligion}
                onChange={(e) => {
                  setEReligion(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="email"
                value={eemail}
                onChange={(e) => {
                  setEEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <div>
                <label
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  Add picture of plane
                </label>
              </div>
              <div>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setEImage(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <input
                type="password"
                placeholder="new password"
                value={enpassword}
                onChange={(e) => {
                  setENPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="confirm password"
                value={ecpassword}
                onChange={(e) => {
                  setECPassword(e.target.value);
                }}
              />
            </div>
            <div className="submainfour-employee-reg">
              <div>
                <button className="btn-sub-reg-e" onClick={clickEmployeeSubmit}>
                  submit
                </button>
              </div>
              <div>
                <button
                  className="btn-clear-reg-e"
                  onClick={clickEmployeeClear}
                >
                  clear
                </button>
              </div>
            </div>
            <div>
              <label className="e-validate-msg">{errorEmployeeSubmit}</label>
            </div>
          </div>
        </div>
        <div
          style={{
            top: `${hideeregmessage ? "6%" : "-40%"}`,
          }}
          className="msg-ereg-c"
        >
          <div>
            <button onClick={clickERegMessage}>x</button>
          </div>
          <div>
            <label onClick={clickERegMessage}>Register success</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
