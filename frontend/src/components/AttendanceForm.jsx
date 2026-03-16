import { useState } from "react"
import API from "../api"

function AttendanceForm(){

  const [data,setData] = useState({
    employee_id:"",
    date:"",
    status:"Present"
  })

  const submit = async () => {

    await API.post("/attendance",data)

    alert("Attendance marked")

  }

  return(

    <div>

      <input
      placeholder="Employee ID"
      onChange={(e)=>setData({...data,employee_id:e.target.value})}
      />

      <input
      type="date"
      onChange={(e)=>setData({...data,date:e.target.value})}
      />

      <select
      onChange={(e)=>setData({...data,status:e.target.value})}
      >

        <option>Present</option>
        <option>Absent</option>

      </select>

      <button onClick={submit}>
        Mark Attendance
      </button>

    </div>

  )
}

export default AttendanceForm