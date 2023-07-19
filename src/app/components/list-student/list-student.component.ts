import { Component,OnInit } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any;
  constructor(private action: StudentService){ }


  ngOnInit(): void {
   this.getAll();
  }

getAll(){
  this.action.studentGetAll().subscribe((res: any) => {
        this.students = res.payload;
        console.log(this.students)
      });
}

}
