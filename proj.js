/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developers = employees.map(employee => {
        if (employee.profession === "developer") {
          return employee;
        }
      }).filter(Boolean);  
      console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const developers = [];
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  console.log(developers);
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
  employees.push(newEmployee);
  console.log(employees);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(updatedEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployees = [
        {id: 4, name: "alice", age: "22", profession: "developer"},
        {id: 5, name: "bob", age: "23", profession: "designer"},
        {id: 6, name: "charlie", age: "21", profession: "manager"}
      ];
      const combinedArray = employees.concat(newEmployees);
      console.log(combinedArray);
  }