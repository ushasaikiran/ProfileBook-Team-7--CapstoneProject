import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Chatting = () => {
  const [msgSenderName, senderchange] = useState("");
  const [msgReceiverName, receiverchange] = useState("");
  const [msgText, textchange] = useState("");
  const [dateAndTime, dtchange] = useState("");

  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = { msgSenderName, msgReceiverName, msgText, dateAndTime };

    fetch("http://localhost:8003/api/Message/addMsg", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        alert("Message Sent successfully.");
        navigate("/allpost");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>
        <u>CHAT HERE</u>
      </h2>

      <div className="row">
        <div style={{ marginTop: "1.5cm" }} className="offset-lg-3 col-lg-6">
          <form onSubmit={handlesubmit}>
            <div style={{ textAlign: "left" }}>
              <div style={{ textAlign: "center" }} className="container"></div>
              <div>
                <div className="row">
                  {/* 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={userId} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div> */}

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>Sender Name</b>
                      </label>
                      <input
                        required
                        value={msgSenderName}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => senderchange(e.target.value)}
                        className="form-control"
                      ></input>
                      {msgSenderName.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        <b> Receiver Name </b>
                      </label>
                      <input
                        value={msgReceiverName}
                        onChange={(e) => receiverchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>DATE</b>
                      </label>
                      <input
                        type="date"
                        value={dateAndTime}
                        onChange={(e) => dtchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>YOUR MESSAGE</b>
                      </label>
                      <input
                        type="text"
                        value={msgText}
                        onChange={(e) => textchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        style={{ marginRight: "20px" }}
                        className="btn btn-primary"
                        type="submit"
                      >
                        SEND{" "}
                      </button>{" "}
                      <br></br>
                      <br></br>
                      <div className="divbtn">
                        <Link
                          to="/allpost"
                          style={{ marginTop: "" }}
                          className="btn btn-dark"
                        >
                          Go Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Chatting;
