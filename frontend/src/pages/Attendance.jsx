import { useState } from "react"
import API from "../api"
import AttendanceForm from "../components/AttendanceForm"

function Attendance(){

const [employeeId,setEmployeeId]=useState("")
const [records,setRecords]=useState([])

const fetchAttendance = async () => {

const res = await API.get(`/attendance/${employeeId}`)

setRecords(res.data)

}

return(

<div>

<h2>Attendance</h2>

<AttendanceForm/>

<h3>View Attendance Records</h3>

<input
placeholder="Employee ID"
onChange={(e)=>setEmployeeId(e.target.value)}
/>

<button onClick={fetchAttendance}>
View Records
</button>

<table>

<thead>
<tr>
<th>Date</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{records.map((r,index)=>(
<tr key={index}>
<td>{r.date}</td>
<td>{r.status}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Attendance