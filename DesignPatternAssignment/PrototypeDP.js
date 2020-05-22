
function EmployeeDetails(name,salary) {
    this.name = name;
    this.salary =  salary;
    this.behaviour = function(name)  {
          console.log(` Employeee ${ this.name} is working hard`);
    
}
}

var emp = new  EmployeeDetails("Sagar",60000);
console.log(emp.name);
console.log(emp.salary);
emp.behaviour();
console.log("------------- Object is Cloned------------ ::");
// copy of emp object is created.
const emp2 = Object.create(emp, { Department: { value: 'IT' } });
console.log(emp2.name);
console.log(emp2.salary);
console.log(emp2.Department);
console.log("-----------can't access 'emp ' object to the newly added property 'Department'");
console.log(emp.Department);
emp2.behaviour();





