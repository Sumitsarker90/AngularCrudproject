import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiurl="localhost:8081/get-all-student"

  constructor(private http: HttpClient) { }

  studentGetAll(){
    return this.http.get(this.apiurl)
  }

  saveStudentData(data:any){
    // console.log(data);
    return this.http.post(this.apiurl,data);
    }
  
    deleteStudent(id:any){
  
      return this.http.delete(`${this.apiurl}/${id}`);
  
    }
    
  
    getStudentBYId(id:number){
      return this.http.get(`${this.apiurl}/${id}`)
    }
  
    updateStudentData(id:number, data:any){
      return this.http.put(`${this.apiurl}/${id}`,data);
  
    }
}
