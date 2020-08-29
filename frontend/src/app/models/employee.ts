export class Employee { //exportado a services
  constructor(_id='', name='', position='', office='', salary=0){
    this._id=_id;
    this.name=name;
    this.position=position;
    this.office=office;
    this.salary=salary;
  }
  // el subguion '_', los datos vienen de mongo
  _id: string;
  name: string;
  position: string;
  office: string;
  salary: number;
}


