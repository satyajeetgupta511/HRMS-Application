import EmployeeForm from "../components/EmployeeForm"
import EmployeeList from "../components/EmployeeList"

function Employees(){

  return(
    <div>

      <h2>Employee Management</h2>

      <EmployeeForm />

      <EmployeeList />

    </div>
  )
}

export default Employees