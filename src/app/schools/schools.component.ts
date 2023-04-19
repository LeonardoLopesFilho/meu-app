
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {

  allowNewSchool = false
  createdSchoolStatus = "Nenhuma Escola Criada"
  schoolName = "Nome de Teste da Escola";

  constructor() {}

  ngOnInit(): void {
      setTimeout(() =>{
        this.allowNewSchool = true
      }, 3000);
  }

  createSchool() {
    this.createdSchoolStatus = "Escola Criada com o nome de:" + this.schoolName;
  }

  updateSchoolName(event: Event){
    this.schoolName = (<HTMLInputElement>event.target).value;
  }
}
