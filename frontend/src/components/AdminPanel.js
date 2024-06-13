import { useState, useEffect } from "react";
import AddPlane from "../image/icon/add.png";
import ViewOrder from "../image/icon/shopping-list.png";
import ViewCustomer from "../image/icon/multiple-users-silhouette.png";
import NoData from "../image/icon/paper.png";
import Back from "../image/icon/logout.png";
import "../css/AdminPanel.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { setNewPlane } from "../service";

function AdminPanel() {
  const [printViewCustomer, setPrintViewCustomers] = useState(false);
  const [printViewOrders, setPrintViewOrders] = useState(false);
  const [addPlane, setAddPlane] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [adminView, setAdminView] = useState(false);

  const [pname, setPName] = useState("");
  const [psheet, setPShett] = useState("");
  const [pprice, setPPrice] = useState("");
  const [pold, setPOld] = useState("");
  const [pweight, setPWeight] = useState("");
  const [pimage, setPImage] = useState("");
  const [pprimary, setPPrimary] = useState("");
  const [prange, setPRange] = useState("");
  const [pspeed, setPSpeed] = useState("");
  const [pfuel, setPFuel] = useState("");

  const [errorPlaneSubmit, setErrorPlaneSubmit] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/delership/api/customers"
        );
        setCustomerData(response.data.content);
        const response1 = await axios.get(
          "http://localhost:1000/delership/api/salesOrder"
        );
        setOrderData(response1.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function clickPrintCustomers() {
    if (printViewCustomer === true) {
      setPrintViewCustomers(false);
      setAdminView(false);
      addPlane(false);
    } else {
      setPrintViewCustomers(true);
      setPrintViewOrders(false);
      setAddPlane(false);
      setAdminView(true);
    }
  }

  function clickPrintOrders() {
    if (printViewOrders === true) {
      setPrintViewOrders(false);
      setAdminView(false);
      addPlane(false);
    } else {
      setPrintViewOrders(true);
      setPrintViewCustomers(false);
      setAddPlane(false);
      setAdminView(true);
    }
  }

  const encodeImageFileAsURL = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function clickAddPlane() {
    if (addPlane === true) {
      setPrintViewOrders(false);
      setAdminView(false);
      addPlane(false);
    } else {
      setPrintViewOrders(false);
      setPrintViewCustomers(false);
      setAddPlane(true);
      setAdminView(true);
    }
  }

  function clickPlaneAdd() {
    if (pname === null) {
      setErrorPlaneSubmit("Empty plane name");
    } else if (!pname.match(/^[A-Za-z\s]+$/)) {
      setErrorPlaneSubmit("Inavlid Plane Name");
    } else if (psheet === null) {
      setErrorPlaneSubmit("Empty plane sheet");
    } else if (!psheet.match(/^\d+$/)) {
      setErrorPlaneSubmit("Invalid plane sheet");
    } else if (pprice === null) {
      setErrorPlaneSubmit("Empty plane price");
    } else if (!pprice.match(/^\d+$/)) {
      setErrorPlaneSubmit("Invalid plane price");
    } else if (pold === null) {
      setErrorPlaneSubmit("Empty plane old");
    } else if (!pold.match(/^\d+$/)) {
      setErrorPlaneSubmit("Invalid plane old");
    } else if (pweight === null) {
      setErrorPlaneSubmit("Empty plane weight");
    } else if (!pweight.match(/^\d+$/)) {
      setErrorPlaneSubmit("Invalid plane weight");
    } else if (pprimary === null) {
      setErrorPlaneSubmit("Not select plane primary type");
    } else if (pfuel === null) {
      setErrorPlaneSubmit("Not select plane fueltype");
    } else if (prange === null) {
      setErrorPlaneSubmit("Not select plane range type");
    } else if (pspeed === null) {
      setErrorPlaneSubmit("Not select plane speed type");
    } else if (pimage === null) {
      setErrorPlaneSubmit("Not add plane picture");
    } else {
      console.log(pimage);
      setErrorPlaneSubmit("");
      const resp = setNewPlane({
        name: pname,
        sheet: psheet,
        image: pimage,
        price: pprice,
        old: pold,
        weight: pweight,
        fuel: pfuel,
        speed: pspeed,
        range: prange,
        primary: pprimary,
      });
      console.log(resp);
      if (resp !== null) {
        setPName("");
        setPFuel("");
        setPOld("");
        setPPrice("");
        setPRange("");
        setPImage("");
        setPShett("");
        setPWeight("");
        setPPrimary("");
        setPSpeed("");
        setPImage("");
        alert("yes");
      } else {
        alert("No");
      }
    }
  }

  function clickPlaneClear() {
    setPName("");
    setPFuel("");
    setPOld("");
    setPPrice("");
    setPRange("");
    setPImage("");
    setPShett("");
    setPWeight("");
    setPPrimary("");
    setPSpeed("");
  }

  return (
    <div className="admin-main">
      <div className="admin-board">
        <div>
          <h3>Admin Panel</h3>
        </div>
        <div className="div-1">
          <div>
            <img
              src={AddPlane}
              alt="test"
              style={{ width: "30px", height: "30px" }}
              onClick={clickAddPlane}
            />
          </div>
          <div>
            <label>Add Plane</label>
          </div>
        </div>
        <div className="div-1">
          <div>
            <img
              src={ViewCustomer}
              alt="test"
              style={{ width: "30px", height: "30px" }}
              onClick={clickPrintCustomers}
            />
          </div>
          <div>
            <label>View Customers</label>
          </div>
        </div>
        <div className="div-1">
          <div>
            <img
              src={ViewOrder}
              alt="test"
              style={{ width: "30px", height: "30px" }}
              onClick={clickPrintOrders}
            />
          </div>
          <div>
            <label>View Orders</label>
          </div>
        </div>
        <div className="div-1">
          <Link to="/home">
            <div>
              <img
                src={Back}
                alt="test"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </Link>
          <div>
            <label>Back</label>
          </div>
        </div>
      </div>
      {adminView ? (
        <div>
          <div
            style={{ bottom: `${printViewCustomer ? "24%" : "-500%"}` }}
            className="views-admin-customers"
          >
            <div>
              <label>View Customers</label>
            </div>
            <div>
              <table>
                <tr>
                  <th>Customer ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Contact Number</th>
                  <th>Age</th>
                  <th>Gender Type</th>
                  <th>NIC</th>
                  <th>Email</th>
                </tr>
                {customerData.map((ele) => {
                  return (
                    <tr>
                      <td>{ele.id}</td>
                      <td>{ele.firstName}</td>
                      <td>{ele.lastName}</td>
                      <td>{ele.contactNo}</td>
                      <td>{ele.age}</td>
                      <td>{ele.genderType}</td>
                      <td>{ele.nic}</td>
                      <td>{ele.email}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div
            style={{ bottom: `${printViewOrders ? "400px" : "-2000px"}` }}
            className="views-admin-orders"
          >
            <div>
              <label>View Orders</label>
            </div>
            <div>
              <table>
                <tr>
                  <th>Order ID</th>
                  <th>Order Price</th>
                  <th>Order Date</th>
                </tr>
                {orderData.map((ele) => {
                  return (
                    <tr>
                      <td>{ele.id}</td>
                      <td>{ele.orderPrice}</td>
                      <td>{ele.dateTime}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div
            style={{ bottom: `${addPlane ? "15%" : "-200%"}` }}
            className="add-admin-planes"
          >
            <h3>Add Plane</h3>
            <div className="add-sub-admin-planes">
              <div>
                <input
                  type="text"
                  placeholder="plane name"
                  value={pname}
                  onChange={(e) => {
                    setPName(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="sheet"
                  value={psheet}
                  onChange={(e) => {
                    setPShett(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="plane price"
                  value={pprice}
                  onChange={(e) => {
                    setPPrice(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="old"
                  value={pold}
                  onChange={(e) => {
                    setPOld(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="weight"
                  value={pweight}
                  onChange={(e) => {
                    setPWeight(e.target.value);
                  }}
                />
              </div>
              <div className="div-add-sub">
                <div>
                  <label
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Primary
                  </label>
                </div>
                <div>
                  <select
                    value={pprimary}
                    onChange={(e) => {
                      setPPrimary(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="PERSONAL">PERSONAL</option>
                    <option value="BUSINESS">BUSINESS</option>
                    <option value="SPECIALIZED">SPECIALIZED</option>
                  </select>
                </div>
              </div>
              <div className="div-add-sub">
                <div>
                  <label
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Fuel Type
                  </label>
                </div>
                <div>
                  <select
                    value={pfuel}
                    onChange={(e) => {
                      setPFuel(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="AVGAS">AVGAS</option>
                    <option value="JET_FUEL">JET_FUEL</option>
                  </select>
                </div>
              </div>
              <div className="div-add-sub">
                <div>
                  <label
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Range Type
                  </label>
                </div>
                <div>
                  <select
                    value={prange}
                    onChange={(e) => {
                      setPRange(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="LONG">Long</option>
                    <option value="SHORT">Short</option>
                  </select>
                </div>
              </div>
              <div className="div-add-sub">
                <div>
                  <label
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Speed Type
                  </label>
                </div>
                <div>
                  <select
                    value={pspeed}
                    onChange={(e) => {
                      setPSpeed(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="MID">MID</option>
                    <option value="SLOW">SLOW</option>
                    <option value="HIGH">HIGH</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
                        encodeImageFileAsURL(file);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="div-add-sub">
                <div>
                  <button className="btn-plane-sub" onClick={clickPlaneAdd}>
                    add
                  </button>
                </div>
                <div>
                  <button className="btn-plane-clear" onClick={clickPlaneClear}>
                    clear
                  </button>
                </div>
              </div>
              <div>
                <label className="p-validate-msg">{errorPlaneSubmit}</label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="div-nodata">
          <div>
            <img src={NoData} alt="test" />
          </div>
          <div>
            <label>No Data</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
