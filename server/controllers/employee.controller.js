const Employee = require("../models/employee");
const employeeCtrl = {};

//FUNCIONES
employeeCtrl.getEmployees = async (req, res) => {  //'await' : esto va a tomar tiempo
  //busca en la db
  const employees = await Employee.find();
  res.json(employees); //repuesta en formato json
};

employeeCtrl.createEmployee = async (req, res) => {
  const employee = new Employee(req.body);  
  await employee.save();
  res.json({ status: "Employee Saved" });
};

employeeCtrl.getEmployee = async (req, res) => {
  //console.log(req.params.id);
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };
  await Employee.findOneAndUpdate(id, { $set: employee }, { new: true });
  res.json({ status: "Employee Updated" });
};

employeeCtrl.deletedEmployee = async (req, res) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: "Employee Deleted" });
};

module.exports = employeeCtrl;  //exportado a routes
