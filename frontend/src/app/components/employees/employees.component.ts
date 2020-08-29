import { Component, OnInit } from '@angular/core';
//new
import { EmployeeService } from '../../services/employee.service';
import {NgForm} from '@angular/forms';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
  //providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {
  //se instancia
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {

  }
  addEmployee(form: NgForm){
    this.employeeService.postEmployee(form.value)
    .subscribe(res => {
      console.log(res)
    });

  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }


}
