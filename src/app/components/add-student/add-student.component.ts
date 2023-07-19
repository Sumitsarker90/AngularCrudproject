import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{

  constructor(private student:StudentsService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  message:boolean=false;

  addStudent = new FormGroup({
    name:new FormControl(''),
    email: new FormControl('')
  }
);

saveData(){
  this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
    // console.log(result);
    this.message=true;
    this.addStudent.reset({});
  });
  
}

removeMessage(){
  this.message=false;
}
}
