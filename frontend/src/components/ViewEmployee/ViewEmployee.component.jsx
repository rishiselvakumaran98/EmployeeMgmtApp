import React, { useEffect, useState } from 'react'
import EmployeeService from '../../services/EmployeeService'
import './ViewEmployee.styles.css'

function ViewEmployeeComponent(props){
    const [id] = useState(props.match.params.id);
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then( res => {
            setEmployee(res.data);
        })
    }, )

    return (
        <div>
            <br></br>
            <div class="card-object" className = "card col-md-6 offset-md-3">
                <h3 class="card-title"className = "text-center"> View Employee Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <h5> Employee First Name: </h5>
                        <div> { employee.firstName }</div>
                    </div>
                    <div className = "row">
                        <h5 class="title"> Employee Last Name: </h5>
                        <div> { employee.lastName } </div>
                    </div>
                    <div className = "row">
                        <h5 class="title"> Employee Email ID: </h5>
                        <div> { employee.emailId }</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewEmployeeComponent;