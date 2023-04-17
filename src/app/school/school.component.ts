import { Component } from "@angular/core";

@Component({
    selector: 'app-school',
    templateUrl:'./school.component.html'
})

export class SchoolComponent {
    schoolID = 10;
    schoolName = 'EnyCaldeira'

    getSchoolName(){
        return this.schoolName
    }
}