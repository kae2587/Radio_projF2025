// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React, { useEffect } from "react";
import { db } from "./firebase"; // Import your Firebase setup
import { collection, getDocs } from "firebase/firestore";

function App() {
  useEffect(() => {
    // Try reading from Firestore to confirm connection
    const testConnection = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        console.log("✅ Firebase connected! Documents in 'test' collection:");
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.error("❌ Firebase connection failed:", error);
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Firebase Connection Test</h1>
      <p>Check the browser console to see if Firebase connected successfully ✅</p>
    </div>
  );
}

export default App;

