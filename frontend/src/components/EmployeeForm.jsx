import { useState } from "react"
import API from "../api"

function EmployeeForm(){

  const [data,setData] = useState({
    employee_id:"",
    full_name:"",
    email:"",
    department:""
  })

  const submit = async () => {

    await API.post("/employees",data)

    alert("Employee added")

  }

  return(

    <div>

      <input
      placeholder="Employee ID"
      onChange={(e)=>setData({...data,employee_id:e.target.value})}
      />

      <input
      placeholder="Full Name"
      onChange={(e)=>setData({...data,full_name:e.target.value})}
      />

      <input
      placeholder="Email"
      onChange={(e)=>setData({...data,email:e.target.value})}
      />

      <input
      placeholder="Department"
      onChange={(e)=>setData({...data,department:e.target.value})}
      />

      <button onClick={submit}>
        Add Employee
      </button>

    </div>
  )
}

export default EmployeeForm