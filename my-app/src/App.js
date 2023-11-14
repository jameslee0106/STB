import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [subTotal, setSubTotal] = useState('');
  const [balance, setBalance] = useState('');
  const [foodItem, setFoodItem] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [totalTax, setTotalTax] = useState('');
  const [totalTip, setTotalTip] = useState('');
  const [confirmedInputs, setConfirmedInputs] = useState([]);


  const handleConfirm = () => {
    const inputData = {
      balance,
      name,
      subTotal,
      foodItem,
      itemPrice,
      totalTax,
      totalTip
    };

    setConfirmedInputs([...confirmedInputs, inputData]);

    // Clear the input fields after confirming
    setBalance('');
    setName('');
    setSubTotal('')
    setFoodItem('');
    setItemPrice('');
    setTotalTax('');
    setTotalTip('');
  };

  const handleClear = () => {
    // Clear the confirmedInputs array
    setConfirmedInputs([]);
  };


  const totalVenmoShare = (inputData) => {
    let subtotalShare = parseFloat(inputData.itemPrice) / parseFloat(inputData.subTotal);
    let taxShare = parseFloat(inputData.totalTax) * subtotalShare;
    let tipShare = parseFloat(inputData.totalTip) * subtotalShare;
    let total = parseFloat(inputData.itemPrice) + taxShare + tipShare;
  
    return total.toFixed(2);
  }
  
  const findBalance = (inputData) => {
    let startBalance = parseFloat(inputData.subTotal);
    return startBalance.toFixed(2);
  }
  
  return (
 
    <div className="total-container">
      <h1>Split The Bill</h1>
      <h2>Balance: {findBalance}</h2>
      <div>
      <label>Enter Name: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
      <label> Enter Subtotal: </label>
      <input
        type="text"
        value={subTotal}
        onChange={(e) => setSubTotal(e.target.value)}
      />
      </div>
      <div>
      <label> Enter Food Item: </label>
      <input
        type="text"
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
      />
  </div>
  <div>
       <label> Enter Item Price: </label>
      <input
        type="text"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      </div>
      <div>
      <label> Enter Total Tax: </label>
      <input
        type="text"
        value={totalTax}
        onChange={(e) => setTotalTax(e.target.value)}
      />
      </div>
      <label> Enter Total Tip: </label>
      <input
        type="text"
        value={totalTip}
        onChange={(e) => setTotalTip(e.target.value)}
      />
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleClear}>Clear</button>
      <div className="confirmed-inputs">
        {confirmedInputs.map((inputData, index) => (
          <div key={index}>
            <h1> {inputData.name}:</h1>
            <pre>
              <div>
              Name: {inputData.name}
              </div>
              <div>
              Enter Food Item: {inputData.foodItem}
              </div>
              <div>
              Enter Subtotal: {inputData.subTotal}
              </div>
              <div>
              Enter Total Tax: {inputData.totalTax}
              </div>
              <div>
              Enter Total Tip: {inputData.totalTip}
              </div>
              <div>
              Total Share: {totalVenmoShare(inputData)}
              </div>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
