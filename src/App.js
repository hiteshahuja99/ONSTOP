import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contactus from "./components/Contactus";
import Homepage from "./components/Homepage";

function App() {
  return ( 
    <div>
          <Router>
            <Routes>
            <Route path="/" element={<Homepage />} exact>
              
</Route>
      <Route path="/contact-us" element={<Contactus />}>
      
      </Route>
      </Routes>
      </Router>
    </div>
   );
}

export default App;