const Employee = (employeeObject) => {
    return `
    <br>
     <ul>ID: ${employeeObject.id}</ul>
     <ul>Name: ${employeeObject.firstName} ${employeeObject.lastName}</ul>
     <ul>Title: ${employeeObject.jobTitle}</ul>
     <ul>Hours Scheduled:${employeeObject.hoursScheduled}</ul>
    <br>
    `
}

export default Employee