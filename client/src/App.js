import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Personal from './Components/Personal'
import Buisness from './Components/Buisness'
import Loan from './Components/Loan'
function App() {
  return (
    <div>
      {/* <!-- Nav tabs --> */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#home">Personal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu1">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu2">Loan</a>
        </li>
      </ul>

      {/* <!-- Tab panes --> */}
      <div className="tab-content">
        <div className="tab-pane container active" id="home"><Personal /></div>
        <div className="tab-pane container fade" id="menu1"><Buisness /></div>
        <div className="tab-pane container fade" id="menu2"><Loan /></div>
      </div>
    </div>
  )
}

export default App