import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulo permite trabajar con formularios, enlazar datos, obtener datos...
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    //new
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
