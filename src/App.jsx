//import { useState } from "react";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  const data = [
    {
      plan: "FREE",
      amount: "0",
      features: {
        "Sigle User": true,
        "50GB Storae": true,
        "Unlimited Public Project": true,
        "Community Access": true,
        "Unlimited Private Project": false,
        "Dedicated Phone Support": false,
        "Free Subdomain": false,
        "Monthly Status Report": false,
      },
    },
    {
      plan: "PLUS",
      amount: "9",
      features: {
        "5 User": true,
        "50GB Storae": true,
        "Unlimited Public Project": true,
        "Community Access": true,
        "Unlimited Private Project": true,
        "Dedicated Phone Support": true,
        "Free Subdomain": true,
        "Monthly Status Report": false,
      },
    },

    {
      plan: "PRO",
      amount: "49",
      features: {
        "Unlimited User": true,
        "50GB Storae": true,
        "Unlimited Public Project": true,
        "Community Access": true,
        "Unlimited Private Project": true,
        "Dedicated Phone Support": true,
        "Free Subdomain": true,
        "Monthly Status Report": true,
      },
    },
  ];

  return (
    <>
      <div className="main">
        {data.map((item, index) => (
          <div key={index} className="card">
            <small className="plan-text">{item.plan}</small>
            <h1>${item.amount}/month</h1>
            {Object.entries(item.features).map(([features, enable], index) => (
              <div key="index">
                <p className="features" key={index}>
                  <span>
                    {enable == true ? (
                      <i className="icon fa-solid fa-check"></i>
                    ) : (
                      <i className="icon fa-solid fa-xmark"></i>
                    )}
                  </span>
                  {features}
                </p>
              </div>
            ))}
            <button className="btn btn-primary">BUTTON</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
