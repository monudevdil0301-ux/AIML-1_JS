let employees = [];

const addEmployee = () => {
  let name = document.getElementById("name").value;
  let empId = document.getElementById("empId").value;
  let salary = parseFloat(document.getElementById("salary").value);
  let dept = document.getElementById("dept").value;
  if(name === "" || empId === "" || salary === isNaN || dept == ""){
    alert("Please fill the Empty Details with the proper type");
    return;
  }
  let employee = {
    name: name,
    id:empId,
    salary: salary,
    department: dept,
  };
  employees.push(employee);
  alert("The Employee Added Successfully.");

  name = document.getElementById("name").value = "";
  empId = document.getElementById("empId").value = "";
  salary = parseFloat(document.getElementById("salary").value) = 0;
  dept = document.getElementById("dept").value = "";

  console.log(employee);
}

const displayEmployee = () => {
  let output = "<h3>All The Employees</h3>";
  employees.forEach((emp) => {

    output += `
    Name: ${emp.name} |
    Employee Id: ${emp.empId} |
    Salary: ₹${emp.salary} |
    Department: ${emp.dept}`
    
  })

  let outPut = document.getElementById("output");
  outPut.innerHTML = output;
}

const filterSalary = () => {

  let filtered = employees.filter((emp) => emp.salary > 50000);
  let output = "<h3></h3>"
}