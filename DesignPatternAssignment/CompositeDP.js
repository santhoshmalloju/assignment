class CompanyComponent {
  constructor(name) {
      this.empName = name;
  };
    getSalary(exp,empName) {};
}

class Developer extends CompanyComponent {
  constructor(name,exp) {
      super(name);
      this.exp = exp;


  }
   getSalary(exp) {
      var experience = exp;
      
      let salary = experience * 20000;
      
      console.log(`Salary of Employee ${this.empName} :: ${salary}`);
      
  }



}

class Manager extends CompanyComponent {
  
 
  constructor(name,exp) {
      super(name);
      this.exp = exp;
  }
  getSalary(exp) {
     
      var experience = exp;
      
      var salary = experience * 20000;
      
      console.log(`Salary of Manager ${this.empName} :: ${salary}`);

     
     
  }
  developerUnderManager(obj) {
    

   delete this.empName;
   delete this.exp;
    console.log(this);
  }
  
  
}
var dev1 = new Developer("Sagar",5);
dev1.getSalary(5);
var dev2 = new Developer("Sagi",3);
dev2.getSalary(3);
var dev3 = new Developer("Kabir",7);
dev3.getSalary(7);
var dev4 = new Developer("Raj",2);
dev4.getSalary(2);
var dev5 = new Developer("Ahem",6);
dev5.getSalary(6);

var mgr1 = new Manager("John",8);
mgr1.getSalary(8);


mgr1["emp1"] = dev1;
mgr1["emp2"] = dev2;
mgr1["emp3"] = dev3;
mgr1["emp4"] = dev4;
mgr1["emp5"] = dev5;
mgr1.developerUnderManager();





