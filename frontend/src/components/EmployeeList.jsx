import { useEffect, useState } from "react"
import API from "../api"

function EmployeeList(){

  const [employees,setEmployees] = useState([])

  useEffect(()=>{

    API.get("/employees").then(res=>{
      setEmployees(res.data)
    })

  },[])

  const remove = async(id)=>{

    await API.delete(`/employees/${id}`)

    window.location.reload()

  }

  return(

    <table>

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Dept</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {employees.map(e=>(
          <tr key={e.employee_id}>
            <td>{e.employee_id}</td>
            <td>{e.full_name}</td>
            <td>{e.email}</td>
            <td>{e.department}</td>

            <td>
              <button onClick={()=>remove(e.employee_id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}

      </tbody>

    </table>

  )
}

export default EmployeeList