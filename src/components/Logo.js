// import React from "react";
// import "./Logo.css";

// function Logo() {
//   return (
//     <div className="logo-container">
//       <span className="logo-small">THE</span>
//       <h1 className="logo-main">ART</h1>
//       <span className="logo-sub">CHRONICLE</span>
//       <div className="brush-line"></div>
//     </div>
//   );
// }

// export default Logo;




// import React from "react";
// import { Link } from "react-router-dom";
// import "./Logo.css";

// function Logo() {
//     return (
//         <Link to="/" className="nav-logo">
//             <span className="logo-small">THE</span>
//             <span className="logo-art">ART</span>
//             <span className="logo-chronicle">Chronicle</span>
//             <div className="logo-line"></div>
//         </Link>
//     );
// }

// export default Logo;

import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="nav-logo">
      <span className="logo-the">THE</span>
      <div className="logo-main">
        <span className="logo-art">ART</span>
        <span className="logo-chronicle">CHRONICLE</span>
      </div>
      <div className="logo-line"></div>
    </Link>
  );
}

export default Logo;