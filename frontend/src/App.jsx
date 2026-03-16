import { useState } from "react"
import Employees from "./pages/Employees"
import Attendance from "./pages/Attendance"

function App() {

  const [page,setPage] = useState("employees")

  return (
    <div className="container">

      <h1>HRMS Lite</h1>

      <button onClick={()=>setPage("employees")}>Employees</button>
      <button onClick={()=>setPage("attendance")}>Attendance</button>

      {page==="employees" && <Employees/>}
      {page==="attendance" && <Attendance/>}

    </div>
  )
}

export default App