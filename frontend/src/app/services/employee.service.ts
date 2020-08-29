//servicios: permite definir metodos, utilizados en cualquier parte de la app
import { Injectable } from '@angular/core';
//new: comunicar el frontend con el servidor
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  //'http:' Instanciado.. usado para hacer consultas al servidor
  constructor(private http: HttpClient) { }
}
