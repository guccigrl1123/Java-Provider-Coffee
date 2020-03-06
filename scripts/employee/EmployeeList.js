import Employee from "./Employee.js"
import { useEmployee } from "./employeeDataProvider.js"

const EmployeeList = () => {

    const contentElement = document.querySelector(".employee_list")
    
    const employeeObjectArray = useEmployee()

    for (const employeeObject of employeeObjectArray) {
     const landmarkHTMLRepresentation= Employee(employeeObject)

     contentElement.innerHTML += landmarkHTMLRepresentation
    }
    
    }

    export default EmployeeList