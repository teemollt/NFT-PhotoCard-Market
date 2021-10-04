// import React, { useState } from "react";
// import "./Password.css";
// function Password(): JSX.Element {
//   const [equation, setequation] = useState(0);

//   const [isDecimalAdded, setisDecimalAdded] = useState(false);
//   const [isOperatorAdded, setisOperatorAdded] = useState(false);
//   const [isStarted, setisStarted] = useState(false);

//   function append(character: number | string) {
//     // Start
//     if (equation === "0" && !isOperator(character)) {
//       if (character === ".") {
//         this.equation += "" + character;
//         this.isDecimalAdded = true;
//       } else {
//         this.equation = "" + character;
//       }

//       this.isStarted = true;
//       return;
//     }

//     // If Number
//     if (!this.isOperator(character)) {
//       if (character === "." && this.isDecimalAdded) {
//         return;
//       }

//       if (character === ".") {
//         this.isDecimalAdded = true;
//         this.isOperatorAdded = true;
//       } else {
//         this.isOperatorAdded = false;
//       }

//       this.equation += "" + character;
//     }

//     // Added Operator
//     if (this.isOperator(character) && !this.isOperatorAdded) {
//       this.equation += "" + character;
//       this.isDecimalAdded = false;
//       this.isOperatorAdded = true;
//     }
//   }
//   return (
//     <div>
//       <div id="password">
//         <div className="calculator">
//           <div className="result" style={{ gridArea: "result" }}>
//             {"{"}
//             {"{"} equation {"}"}
//             {"}"}
//           </div>
//           <button style={{ gridArea: "number-1" }} onClick="append(1)">
//             1
//           </button>
//           <button style={{ gridArea: "number-2" }} onClick="append(2)">
//             2
//           </button>
//           <button style={{ gridArea: "number-3" }} onClick="append(3)">
//             3
//           </button>
//           <button style={{ gridArea: "number-4" }} onClick="append(4)">
//             4
//           </button>
//           <button style={{ gridArea: "number-5" }} onClick="append(5)">
//             5
//           </button>
//           <button style={{ gridArea: "number-6" }} onClick="append(6)">
//             6
//           </button>
//           <button style={{ gridArea: "number-7" }} onClick="append(7)">
//             7
//           </button>
//           <button style={{ gridArea: "number-8" }} onClick="append(8)">
//             8
//           </button>
//           <button style={{ gridArea: "number-9" }} onClick="append(9)">
//             9
//           </button>
//           <button style={{ gridArea: "number-0" }} onClick="append(0)">
//             0
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Password;
