import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Home.css";

import { setNewCustomer, setInvoices } from "../service";

import Logo from "../image/astrazeneca.png";

import favDefault from "../image/icon/favDefault.jpg";

import arrowRight from "../image/icon/chevron.png";
import arrowLeft from "../image/icon/chevron1.png";

//icons
import primaryImg from "../image/icon/market-research.png";
import fuelImg from "../image/icon/energy-station.png";
import rangeImg from "../image/icon/distance.png";
import oldImg from "../image/icon/manufacture.png";
import seatImg from "../image/icon/seat.png";
import priceImg from "../image/icon/coin.png";
import speedImg from "../image/icon/speedometer.png";
import weightImg from "../image/icon/scale.png";
import favoriteImg from "../image/icon/favourites.png";
import refreshImg from "../image/icon/refresh.png";
import { Link } from "react-router-dom";

function Home() {
  const [aircraftData, setAircraftData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/delership/api/planes"
        );
        setAircraftData(response.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [chBase, setChBase] = useState(false);
  const [chCount, setChCount] = useState(false);

  const [hideMaSelect, setMaHideSelect] = useState(false);
  const [hidePaSelect, setPaHideSelect] = useState(false);
  const [hidePrSelect, setPrHideSelect] = useState(false);
  const [hideWeSelect, setWeHideSelect] = useState(false);
  const [hidePrimSelect, setPrimHideSelect] = useState(false);
  const [hideFueSelelect, setFueHideSelect] = useState(false);
  const [hideSpSelect, setSpHideSelect] = useState(false);
  const [hideRaSelect, setRaHideSelect] = useState(false);

  const [old, setOld] = useState(3);
  const [sheet, setSheet] = useState(10);
  const [weight, setWeight] = useState(150000);
  const [price, setPrice] = useState(20000000);
  const [primary, setPrimary] = useState("select");
  const [fuel, setFuel] = useState("select");
  const [speed, setSpeed] = useState("select");
  const [range, setRange] = useState("select");

  const [maincount, setMainCount] = useState(true);
  const [npic, setNPic] = useState(favDefault);

  const [cfName, setCFName] = useState("");
  const [clName, setCLName] = useState("");
  const [ctNumber, setCTNubmer] = useState("");
  const [cAge, setCAge] = useState("");
  const [cGender, setcGender] = useState("");
  const [cNIC, setCNIC] = useState("");
  const [cnationality, setCNationality] = useState("");
  const [creligion, setCReligion] = useState("");
  const [cemail, setCEmail] = useState("");
  const [ccountry, setCCountry] = useState("");

  const [hideCRegFprm, setHideCRegForm] = useState(false);
  const [RegConmag, setRgConMsg] = useState(false);
  const [regSubMsg, setRegSubMsg] = useState(false);
  const [cvalidatemsg, setCValMsg] = useState("");

  const [hidePaymentForm, setHidePaymentForm] = useState(false);

  const [hideLogout, setHideLogout] = useState(false);

  const [goAdmin, setGoAdmin] = useState(false);

  const [planePrice, setPlanePrice] = useState(0);
  const [planeName, setPlaneName] = useState("");
  const [customername, setCustomerName] = useState("");
  const [customeremail, setCustomerEmail] = useState("");
  const [payPlaneImg, setPayPlaneImg] = useState(favDefault);

  const [infoPlaneName, setInfoPlaneName] = useState(null);
  const [infoPlaneOld, setInfoPlaneOld] = useState(null);
  const [infoPlanePrice, setInfoPlanePrice] = useState(null);
  const [infoPlaneFuel, setInfoPlaneFuel] = useState(null);
  const [infoPlaneImage, setInfoPlaneImage] = useState(null);
  const [infoPlanePrimary, setInfoPlanePrimary] = useState(null);
  const [infoPlaneRange, setInfoPlaneRange] = useState(null);
  const [infoPlaneSheet, setInfoPlaneSheet] = useState(null);
  const [infoPlaneSpeed, setInfoPlaneSpeed] = useState(null);
  const [infoPlaneWeight, setInfoPlaneWeight] = useState(null);

  const [printMoreInfo, setPrintMoreInfo] = useState(false);

  const [payComMsg, setPayComMsg] = useState(false);

  const clickRefresh = () => {
    setMainCount(true);
    setMaHideSelect(false);
    setPaHideSelect(false);
    setWeHideSelect(false);
    setPrHideSelect(false);
    setPrimHideSelect(false);
    setFueHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);

    setChBase(false);
    setChCount(false);

    setOld(3);
    setPrice(20000000);
    setWeight(150000);
    setSheet(10);
    setPrimary("select");
    setFuel("select");
    setSpeed("select");
    setRange("select");
  };

  function clickAddMa() {
    setChBase(true);
    setChCount(true);

    setMaHideSelect(true);
    setWeHideSelect(false);
    setPaHideSelect(false);
    setPrHideSelect(false);
    setPrimHideSelect(false);
    setFueHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);
  }

  function clickAddPa() {
    setChBase(true);
    setChCount(true);

    setPaHideSelect(true);
    setWeHideSelect(false);
    setMaHideSelect(false);
    setPrHideSelect(false);
    setPrimHideSelect(false);
    setFueHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);
  }

  function clickAddPr() {
    setChBase(true);
    setChCount(true);

    setPrHideSelect(true);
    setWeHideSelect(false);
    setPaHideSelect(false);
    setMaHideSelect(false);
    setPrimHideSelect(false);
    setFueHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);
  }

  function clickAddWe() {
    setChBase(true);
    setChCount(true);

    setWeHideSelect(true);
    setPrHideSelect(false);
    setPaHideSelect(false);
    setMaHideSelect(false);
    setPrimHideSelect(false);
    setFueHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);
  }

  const clickAddPrim = () => {
    setChBase(true);
    setChCount(true);

    setPrimHideSelect(true);
    setPaHideSelect(false);
    setWeHideSelect(false);
    setPrHideSelect(false);
    setMaHideSelect(false);
    setFueHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);
  };

  function clickAddFue() {
    setChBase(true);
    setChCount(true);

    setFueHideSelect(true);
    setPrimHideSelect(false);
    setPaHideSelect(false);
    setWeHideSelect(false);
    setPrHideSelect(false);
    setMaHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);
  }

  function clickAddSp() {
    setChBase(true);
    setChCount(true);

    setSpHideSelect(true);
    setFueHideSelect(false);
    setPrimHideSelect(false);
    setPaHideSelect(false);
    setWeHideSelect(false);
    setPrHideSelect(false);
    setMaHideSelect(false);
    setRaHideSelect(false);
  }

  function clickAddRa() {
    setChBase(true);
    setChCount(true);

    setRaHideSelect(true);
    setSpHideSelect(false);
    setFueHideSelect(false);
    setPrimHideSelect(false);
    setPaHideSelect(false);
    setWeHideSelect(false);
    setPrHideSelect(false);
    setMaHideSelect(false);
  }

  function clickAddT1() {
    setMainCount(false);
    if (old === 20) {
      setOld(20);
    } else {
      setOld(old + 1);
    }
  }

  const clickSubT1 = () => {
    setMainCount(false);
    if (old !== 3) {
      setOld(old - 1);
    } else {
      setOld(3);
    }
  };

  function clickAddT2() {
    setMainCount(false);
    if (sheet === 200) {
      setSheet(200);
    } else {
      setSheet(sheet + 10);
    }
  }

  const clickSubT2 = () => {
    setMainCount(false);
    if (sheet !== 10) {
      setSheet(sheet - 10);
    } else {
      setSheet(10);
    }
  };

  function clickAddT3() {
    setMainCount(false);
    if (parseInt(price) === 200000000) {
      setPrice(200000000);
    } else {
      setPrice(parseInt(price) + 20000000);
    }
  }

  const clickSubT3 = () => {
    setMainCount(false);
    if (parseInt(price) !== 20000000) {
      setPrice(parseInt(price) - 20000000);
    } else {
      setPrice(20000000);
    }
  };

  function clickAddT4() {
    setMainCount(false);
    if (parseInt(weight) === 200000) {
      setWeight(200000);
    } else {
      setWeight(parseInt(weight) + 5000);
    }
  }

  const clickSubT4 = () => {
    setMainCount(false);
    if (parseInt(weight) !== 150000) {
      setWeight(parseInt(weight) - 5000);
    } else {
      setWeight(150000);
    }
  };

  function clickAddT5() {
    setPrimary("PERSONAL");
    if (primary === "PERSONAL") {
      setPrimary("BUSINESS");
    }
    if (primary === "BUSINESS") {
      setPrimary("SPECIALIZED");
    }
  }

  const clickSubT5 = () => {
    setPrimary("SPECIALIZED");

    if (primary === "SPECIALIZED") {
      setPrimary("BUSINESS");
    }

    if (primary === "BUSINESS") {
      setPrimary("PERSONAL");
    }

    if (primary === "PERSONAL") {
      setPrimary("SPECIALIZED");
    }
  };

  function clickAddT6() {
    setFuel("AVGAS");
    if (fuel === "AVGAS") {
      setFuel("JET_FUEL");
    }
    if (fuel === "JET_FUEL") {
      setFuel("AVGAS");
    }
  }

  const clickSubT6 = () => {
    setFuel("JET_FUEL");
    if (fuel === "JET_FUEL") {
      setFuel("AVGAS");
    }
    if (fuel === "AVGAS") {
      setFuel("JET_FUEL");
    }
  };

  function clickAddT7() {
    setSpeed("SLOW");
    if (speed === "SLOW") {
      setSpeed("MID");
    }
    if (speed === "MID") {
      setSpeed("HIGH");
    }
  }

  const clickSubT7 = () => {
    setSpeed("HIGH");

    if (speed === "HIGH") {
      setSpeed("MID");
    }

    if (speed === "MID") {
      setSpeed("SLOW");
    }
  };

  function clickAddT8() {
    setRange("SHORT");
    if (range === "SHORT") {
      setRange("LONG");
    }
  }

  const clickSubT8 = () => {
    setRange("LONG");

    if (range === "LONG") {
      setRange("SHORT");
    }
  };

  function clickSelClose() {
    setMainCount(true);
    setMaHideSelect(false);
    setPaHideSelect(false);
    setWeHideSelect(false);
    setPrHideSelect(false);
    setPrimHideSelect(false);
    setFueHideSelect(false);
    setSpHideSelect(false);
    setRaHideSelect(false);

    setChBase(false);
    setChCount(false);
  }

  function clickCReg() {
    if (hideCRegFprm === false) {
      setHideCRegForm(true);

      setRgConMsg(false);
    } else {
      setCFName("");
      setCLName("");
      setCTNubmer("");
      setCAge("");
      setcGender("");
      setCNIC("");
      setCNationality("");
      setCReligion("");
      setCEmail("");
      setCCountry("");
      setCValMsg("");
      setHideCRegForm(false);
    }
  }

  function clickCSubmit() {
    if (cfName.length === 0) {
      setCValMsg("empty first name");
    } else if (!cfName.match(/^[A-Za-z\s]+$/)) {
      setCValMsg("Invalid first name");
    } else if (clName.length === 0) {
      setCValMsg("empty last name");
    } else if (!clName.match(/^[A-Za-z\s]+$/)) {
      setCValMsg("Invalid last name");
    } else if (ctNumber.length === 0) {
      setCValMsg("empty contact number");
    } else if (!ctNumber.match(/^\d{10}$/)) {
      setCValMsg("Invalid Contact Number");
    } else if (cAge.length === 0) {
      setCValMsg("empty age");
    } else if (!cAge.match(/^\d+$/)) {
      setCValMsg("Inavlid Age");
    } else if (cGender === null) {
      setCValMsg("not selected gender type");
    } else if (cNIC.length === 0) {
      setCValMsg("empty NIC number");
    } else if (!cNIC.match(/^\d{9}[Vv]$/)) {
      setCValMsg("Invalid NIC");
    } else if (cnationality.length === 0) {
      setCValMsg("empty nationality type");
    } else if (!cnationality.match(/^[A-Za-z\s]+$/)) {
      setCValMsg("Invalid Nationality");
    } else if (creligion.length === 0) {
      setCValMsg("empty nationality type");
    } else if (!creligion.match(/^[A-Za-z\s]+$/)) {
      setCValMsg("Invalid Religion");
    } else if (cemail.length === 0) {
      setCValMsg("empty email type");
    } else if (
      !cemail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      setCValMsg("Invalid email");
    } else if (ccountry.length === 0) {
      setCValMsg("empty country name");
    } else if (!ccountry.match(/^[A-Za-z\s]+$/)) {
      setCValMsg("Invalid country name");
    } else {
      setNewCustomer({
        firstName: cfName,
        lastName: clName,
        contactNo: ctNumber,
        age: cAge,
        genderType: cGender,
        nic: cNIC,
        nationality: cnationality,
        image: "https://example.com/profile.jpg",
        religion: creligion,
        email: cemail,
        country: ccountry,
      });
      setCustomerName(cfName);
      setCustomerEmail(cemail);
      setCFName("");
      setCLName("");
      setCTNubmer("");
      setCAge("");
      setcGender("");
      setCNIC("");
      setCNationality("");
      setCReligion("");
      setCEmail("");
      setCCountry("");
      setCValMsg("");
      setHideCRegForm(false);
      setRegSubMsg(true);
    }
  }

  function clickCClear() {
    setCFName("");
    setCLName("");
    setCTNubmer("");
    setCAge("");
    setcGender("");
    setCNIC("");
    setCNationality("");
    setCReligion("");
    setCEmail("");
    setCCountry("");
    setCValMsg("");
  }

  const clickClosePayment = () => {
    setHidePaymentForm(false);
  };

  function clickPay() {
    const data = setInvoices({
      orderPrice: price,
      customer: {
        id: 2,
      },
      employee: {
        id: 3,
      },
      plane: {
        id: 3,
      },
    });

    if (data !== null) {
      setPayComMsg(true);
    }
  }

  function clickhideLogout() {
    if (hideLogout === false) {
      setHideLogout(true);
    } else {
      setHideLogout(false);
    }
  }

  const clickGoAdmin = () => {
    if (goAdmin === true) {
      setGoAdmin(false);
    } else {
      setGoAdmin(true);
    }
  };

  function setImages(a) {
    const dataURL = `data:image/jpeg;base64,${a}`;
    return dataURL;
  }
  

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.450)",
        height: "197.5mm",
      }}
    >
      <div className="main-home">
        <div className="main-panel">
          <div className="space">
            <div className="head-space">
              <div>
                <img src={Logo} alt="logos" />
              </div>
              <div>
                <label>pLANE PLASA</label>
              </div>
            </div>
            <div>
              <label className="lbl-fav">favourite</label>
            </div>
            <div>
              <img
                src={npic}
                alt="npic"
                onClick={() => {
                  if (RegConmag === true) {
                    setRgConMsg(false);
                  } else {
                    setRgConMsg(true);
                  }
                }}
              />
            </div>
          </div>
          <div className="main-add">
            <div onClick={clickAddPrim}>
              <img src={primaryImg} alt="img-1" />
              <label>Primary</label>
            </div>
            <div onClick={clickAddPr}>
              <img src={priceImg} alt="img-1" />
              <label>NET Price</label>
            </div>
            <div onClick={clickAddMa}>
              <img src={oldImg} alt="img-1" />
              <label>Mnufacuture Old</label>
            </div>
            <div onClick={clickAddPa}>
              <img src={seatImg} alt="img-1" />
              <label>Passenger Seats</label>
            </div>
            <div onClick={clickAddFue}>
              <img src={fuelImg} alt="img-1" />
              <label>Fuel</label>
            </div>
            <div onClick={clickAddSp}>
              <img src={speedImg} alt="img-1" />
              <label>Speed</label>
            </div>
            <div onClick={clickAddRa}>
              <img src={rangeImg} alt="img-1" />
              <label>Range</label>
            </div>
            <div onClick={clickAddWe}>
              <img src={weightImg} alt="img-1" />
              <label>Weight</label>
            </div>
            <div onClick={clickRefresh}>
              <img src={refreshImg} alt="img-1" />
              <label>Refresh</label>
            </div>
          </div>
          <div></div>
        </div>
        <div
          className="main-base"
          style={{
            width: `${chBase ? "62.9%" : "84.1%"}`,
            gridTemplateColumns: `${
              chCount ? "repeat(5,auto)" : "repeat(6,auto)"
            }`,
          }}
        >
          {aircraftData.map((ele) => {
            if (maincount === true) {
              return (
                <div className="shop-card-main">
                  <div>
                    <img
                      src={setImages(ele.image)}
                      alt="plane-img"
                      onClick={() => {
                        setInfoPlaneName(ele.name);
                        setInfoPlaneOld(ele.old);
                        setInfoPlaneFuel(ele.fuel);
                        setInfoPlaneImage(setImages(ele.image));
                        setInfoPlanePrice(ele.price);
                        setInfoPlanePrimary(ele.primary);
                        setInfoPlaneRange(ele.range);
                        setInfoPlaneSheet(ele.sheet);
                        setInfoPlaneSpeed(ele.speed);
                        setInfoPlaneWeight(ele.weight);
                        if (printMoreInfo === true) {
                          setPrintMoreInfo(false);
                        } else {
                          setPrintMoreInfo(true);
                        }
                      }}
                    />
                  </div>
                  <div className="shop-card-sub">
                    <div>
                      <img
                        src={favoriteImg}
                        alt="pic"
                        style={{
                          width: "15px",
                          height: "15px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setNPic(setImages(ele.image));
                        }}
                      />
                    </div>
                    <div>
                      <button
                        style={{
                          width: "180px",
                        }}
                        onClick={() => {
                          setPlanePrice(ele.price);
                          setPlaneName(ele.name);
                          setPayPlaneImg(setImages(ele.image));
                          if (RegConmag === true) {
                            setRgConMsg(false);
                          } else {
                            setRgConMsg(true);
                          }
                        }}
                      >
                        buy
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else if (
              old === ele.old ||
              sheet === ele.sheet ||
              parseInt(weight) === parseInt(ele.weight) ||
              parseInt(price) === parseInt(ele.price) ||
              primary === ele.primary ||
              speed === ele.speed ||
              range === ele.range ||
              fuel === ele.fuel
            ) {
              return (
                <div className="shop-card-main">
                  <div>
                    <img
                      src={setImages(ele.image)}
                      alt="plane-img"
                      onClick={() => {
                        setInfoPlaneName(ele.name);
                        setInfoPlaneOld(ele.old);
                        setInfoPlaneFuel(ele.fuel);
                        setInfoPlaneImage(setImages(ele.image));
                        setInfoPlanePrice(ele.price);
                        setInfoPlanePrimary(ele.primary);
                        setInfoPlaneRange(ele.range);
                        setInfoPlaneSheet(ele.sheet);
                        setInfoPlaneSpeed(ele.speed);
                        setInfoPlaneWeight(ele.weight);
                      }}
                    />
                  </div>
                  <div className="shop-card-sub">
                    <div>
                      <img
                        src={favoriteImg}
                        alt="pic"
                        style={{
                          width: "15px",
                          height: "15px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setNPic(setImages(ele.image));
                        }}
                      />
                    </div>
                    <div>
                      <button
                        style={{
                          width: "180px",
                        }}
                        onClick={() => {
                          setPlanePrice(ele.price);
                          setPlaneName(ele.name);
                          setPayPlaneImg(setImages(ele.image));
                          if (RegConmag === true) {
                            setRgConMsg(false);
                          } else {
                            setRgConMsg(true);
                          }
                        }}
                      >
                        buy
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hideMaSelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>OLD</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT1} className="btn-back">
                  -
                </button>
              </div>
              <div>
                <label>{old}</label>
              </div>
              <div>
                <button onClick={clickAddT1} className="btn-front">
                  +
                </button>
              </div>
            </div>
            <div>
              <p>
                React is most power in language in current world And create your
                world use magic component as well Function is your real friend
                in react world cloud You can handle css properties to create
                amazing thing Success your future using react world React is
                Modern Language in this current world Method can be divide two
                type that are normal functio and arrow function and function can
                return value or run default macanism
              </p>
            </div>
          </div>
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hidePaSelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>PACCENGER SHEETS</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT2} className="btn-back">
                  -
                </button>
              </div>
              <div>
                <label>{sheet}</label>
              </div>
              <div>
                <button onClick={clickAddT2} className="btn-front">
                  +
                </button>
              </div>
            </div>
            <div>
              <p>
                React is most power in language in current world And create your
                world use magic component as well Function is your real friend
                in react world cloud You can handle css properties to create
                amazing thing Success your future using react world React is
                Modern Language in this current world Method can be divide two
                type that are normal functio and arrow function and function can
                return value or run default macanism
              </p>
            </div>
          </div>
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hidePrSelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>NET PRICE</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT3} className="btn-back">
                  -
                </button>
              </div>
              <div>
                <label>{price}</label>
              </div>
              <div>
                <button onClick={clickAddT3} className="btn-front">
                  +
                </button>
              </div>
            </div>
            <div>
              <p>
                React is most power in language in current world And create your
                world use magic component as well Function is your real friend
                in react world cloud You can handle css properties to create
                amazing thing Success your future using react world React is
                Modern Language in this current world Method can be divide two
                type that are normal functio and arrow function and function can
                return value or run default macanism
              </p>
            </div>
          </div>
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hideWeSelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>WEIGHT</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT4} className="btn-back">
                  -
                </button>
              </div>
              <div>
                <label>{weight}</label>
              </div>
              <div>
                <button onClick={clickAddT4} className="btn-front">
                  +
                </button>
              </div>
            </div>
            <div>
              <p>
                React is most power in language in current world And create your
                world use magic component as well Function is your real friend
                in react world cloud You can handle css properties to create
                amazing thing Success your future using react world React is
                Modern Language in this current world Method can be divide two
                type that are normal functio and arrow function and function can
                return value or run default macanism
              </p>
            </div>
          </div>
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hidePrimSelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>PRIMARY</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT5} className="btn-back">
                  pre
                </button>
              </div>
              <div>
                <label>{primary}</label>
              </div>
              <div>
                <button onClick={clickAddT5} className="btn-front">
                  next
                </button>
              </div>
            </div>
            <div>
              <p>
                React is most power in language in current world And create your
                world use magic component as well Function is your real friend
                in react world cloud You can handle css properties to create
                amazing thing Success your future using react world React is
                Modern Language in this current world Method can be divide two
                type that are normal functio and arrow function and function can
                return value or run default macanism
              </p>
            </div>
          </div>
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hideFueSelelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>FUEL</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT6} className="btn-back">
                  pre
                </button>
              </div>
              <div>
                <label>{fuel}</label>
              </div>
              <div>
                <button onClick={clickAddT6} className="btn-front">
                  next
                </button>
              </div>
            </div>
            <div>
              <p>
                React is most power in language in current world And create your
                world use magic component as well Function is your real friend
                in react world cloud You can handle css properties to create
                amazing thing Success your future using react world React is
                Modern Language in this current world Method can be divide two
                type that are normal functio and arrow function and function can
                return value or run default macanism
              </p>
            </div>
          </div>
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hideSpSelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>SPEED</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT7} className="btn-back">
                  pre
                </button>
              </div>
              <div>
                <label>{speed}</label>
              </div>
              <div>
                <button onClick={clickAddT7} className="btn-front">
                  next
                </button>
              </div>
            </div>
            <div>
              <p>
                React is most power in language in current world And create your
                world use magic component as well Function is your real friend
                in react world cloud You can handle css properties to create
                amazing thing Success your future using react world React is
                Modern Language in this current world Method can be divide two
                type that are normal functio and arrow function and function can
                return value or run default macanism
              </p>
            </div>
          </div>
        </div>
        <div
          className="hide-select"
          style={{
            top: `${hideRaSelect ? "0" : "-800px"}`,
          }}
        >
          <div>
            <div>
              <button onClick={clickSelClose} className="btn-close">
                ^
              </button>
            </div>
            <div>
              <h3>RANGE</h3>
            </div>
            <div className="hide-sub-select">
              <div>
                <button onClick={clickSubT8} className="btn-back">
                  back
                </button>
              </div>
              <div>
                <label>{range}</label>
              </div>
              <div>
                <button onClick={clickAddT8} className="btn-front">
                  next
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>
              React is most power in language in current world And create your
              world use magic component as well Function is your real friend in
              react world cloud You can handle css properties to create amazing
              thing Success your future using react world React is Modern
              Language in this current world Method can be divide two type that
              are normal functio and arrow function and function can return
              value or run default macanism
            </p>
          </div>
        </div>
        <div
          className="msg-register-c"
          style={{
            top: `${RegConmag ? "5%" : "-40%"}`,
          }}
        >
          <div>
            <button
              onClick={() => {
                if (RegConmag === true) {
                  setRgConMsg(false);
                } else {
                  setRgConMsg(true);
                }
              }}
            >
              x
            </button>
          </div>
          <div>
            <label onClick={clickCReg}>register now</label>
          </div>
        </div>
        <div
          className="form-register-main"
          style={{
            right: `${hideCRegFprm ? "-10%" : "-90%"}`,
          }}
        >
          <div className="form-register-c">
            <div>
              <button className="btn-c-close" onClick={clickCReg}>
                x
              </button>
            </div>
            <div>
              <label className="c-form-topic">Customer Registration</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="first name"
                value={cfName}
                onChange={(e) => {
                  setCFName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="last name"
                value={clName}
                onChange={(e) => {
                  setCLName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="contact number"
                value={ctNumber}
                onChange={(e) => {
                  setCTNubmer(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="age"
                value={cAge}
                onChange={(e) => {
                  setCAge(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap:"20px"
              }}
            >
              <div>
                <label
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >Gender Type</label>
              </div>
              <div>
                <select
                  value={cGender}
                  onChange={(e) => {
                    setcGender(e.target.value);
                  }}
                >
                  <option value={""}>select</option>
                  <option value={"MALE"}>male</option>
                  <option value={"FEMALE"}>female</option>
                </select>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="nic"
                value={cNIC}
                onChange={(e) => {
                  setCNIC(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="nationality"
                value={cnationality}
                onChange={(e) => {
                  setCNationality(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="religion"
                value={creligion}
                onChange={(e) => {
                  setCReligion(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="email"
                value={cemail}
                onChange={(e) => {
                  setCEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="country"
                value={ccountry}
                onChange={(e) => {
                  setCCountry(e.target.value);
                }}
              />
            </div>
            <div className="form-register-c-sub">
              <div>
                <button className="btn-c-sub" onClick={clickCSubmit}>
                  submit
                </button>
              </div>
              <div>
                <button className="btn-c-clear" onClick={clickCClear}>
                  clear
                </button>
              </div>
            </div>
            <label className="c-validate-msg">{cvalidatemsg}</label>
          </div>
        </div>
        <div
          className="msg-register-sub"
          style={{
            right: `${regSubMsg ? "5%" : "-30%"}`,
          }}
        >
          <div>
            <button
              onClick={() => {
                setRegSubMsg(false);
                setHidePaymentForm(true);
              }}
            >
              x
            </button>
          </div>
          <div>
            <label
              onClick={() => {
                setRegSubMsg(false);
                setHidePaymentForm(true);
              }}
            >
              customer submitted
            </label>
          </div>
        </div>
        <div
          className="payment-form-main"
          style={{
            left: `${hidePaymentForm ? "25%" : "-90%"}`,
          }}
        >
          <div>
            <button onClick={clickClosePayment} className="btn-p-close">
              x
            </button>
          </div>
          <div className="payment-form-main2">
            <div>
              <label className="lbl-pay-topic">PAYMENT FORM</label>
            </div>
            <div className="payment-form-main3">
              <div className="payment-form-main4">
                <div className="payment-form-main5">
                  <div>
                    <label className="lbl-pay-a">customer name</label>
                  </div>
                  <div>
                    <label className="lbl-pay-b"> : {customername}</label>
                  </div>
                </div>
                <div className="payment-form-main5">
                  <div>
                    <label className="lbl-pay-a">customer email</label>
                  </div>
                  <div>
                    <label className="lbl-pay-b"> : {customeremail}</label>
                  </div>
                </div>
                <div className="payment-form-main5">
                  <div>
                    <label className="lbl-pay-a">plane type</label>
                  </div>
                  <div>
                    <label className="lbl-pay-b" style={{ marginLeft: "41px" }}>
                      {" "}
                      : {planeName}
                    </label>
                  </div>
                </div>
                <div className="payment-form-main5">
                  <div>
                    <label className="lbl-pay-a">price</label>
                  </div>
                  <div>
                    <label className="lbl-pay-b" style={{ marginLeft: "90px" }}>
                      {" "}
                      : LKR {planePrice}
                    </label>
                  </div>
                </div>
                <div>
                  <button onClick={clickPay} className="btn-pay">
                    pay
                  </button>
                </div>
              </div>
              <div>
                <img src={payPlaneImg} alt="def-alt" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="logout-form"
          style={{
            left: `${hideLogout ? "-2%" : "-8.3%"}`,
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <label>logout</label>
            </Link>
          </div>
          <div>
            <img
              src={`${hideLogout ? arrowLeft : arrowRight}`}
              alt="arrow"
              onClick={clickhideLogout}
            />
          </div>
        </div>
        <div
          className="admin-form"
          style={{ left: `${goAdmin ? "-2%" : "-14.7%"}` }}
        >
          <Link to="/admin-panel" style={{ textDecoration: "none" }}>
            <div>
              <label>Admin Panel</label>
            </div>
          </Link>
          <div>
            <img
              src={`${goAdmin ? arrowLeft : arrowRight}`}
              alt="arrow"
              onClick={clickGoAdmin}
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>
        <div
          className="more-info-form-main"
          style={{ top: `${printMoreInfo ? "50px" : "-2000px"}` }}
        >
          <div>
            <h3>More Information</h3>
          </div>
          <div>
            <img src={infoPlaneImage} alt="info images" />
            <div>
              <label>Plane Name: {infoPlaneName}</label>
            </div>
            <div>
              <label>Sheets: {infoPlaneSheet}</label>
            </div>
            <div>
              <label>Price: {infoPlanePrice}</label>
            </div>
            <div>
              <label>Old: {infoPlaneOld}</label>
            </div>
            <div>
              <label>Weight: {infoPlaneWeight}</label>
            </div>
            <div>
              <label>Fuel Type: {infoPlaneFuel}</label>
            </div>
            <div>
              <label>Speed Type: {infoPlaneSpeed}</label>
            </div>
            <div>
              <label>Range Type: {infoPlaneRange}</label>
            </div>
            <div>
              <label>Primary: {infoPlanePrimary}</label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="msg-paymet-com"
        style={{
          right: `${payComMsg ? "5%" : "-30%"}`,
        }}
      >
        <div>
          <button
            onClick={() => {
              setPayComMsg(false);
              setHidePaymentForm(false);
            }}
          >
            x
          </button>
        </div>
        <div>
          <label
            onClick={() => {
              setPayComMsg(false);
              setHidePaymentForm(false);
            }}
          >
            payment success
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home;
