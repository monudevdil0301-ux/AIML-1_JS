let employees = [];

const addEmployee = () => {
  let name = document.getElementById("name").value;
  let empId = document.getElementById("empId").value;
  let salary = parseFloat(document.getElementById("salary").value);

  if (name === "" || empId === "" || isNaN(salary)) {
    alert("Please fill all details correctly");
    return;
  }

  let employee = {
    name: name,
    empId: empId,
    salary: salary
  };

  employees.push(employee);
  alert("Employee added successfully!");

  
  document.getElementById("name").value = "";
  document.getElementById("empId").value = "";
  document.getElementById("salary").value = "";

  console.log(employee);
};

const displayEmployee = () => {
  let output = "<h3>All Employees</h3>";

  employees.forEach((emp) => {
    output += `
      <p>
      Name: ${emp.name} |
      Employee ID: ${emp.empId} |
      Salary: ₹${emp.salary}
      </p>
    `;
  });

  document.getElementById("output").innerHTML = output;
};