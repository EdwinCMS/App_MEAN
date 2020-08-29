//servicios: permite definir metodos, utilizados en cualquier parte de la app
import { Injectable } from '@angular/core';
//new: comunicar el frontend con el servidor
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';
import { EmployeesComponent } from '../components/employees/employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;  //seleccionar empleado
  //'http:' Instanciado.. usado para hacer consultas al servidor
  readonly URL_API = 'http://localhost:3000/api/employees'; //'readonly': variable de solo lectura, no modificable
  employees : Employee[] //almacena arreglo de Employee de la db
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployee(Employee: Employee){ //el segundo employee es de la db
    return this.http.post(this.URL_API, Employee); //
  }

  putEmployee(employee: Employee){
    return this.http.put(this.URL_API + '/${employee._id}', employee) //se obtine el id del empleado y actualiza todo el empleado
  }

  deletedEmployee(_id:string){
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
