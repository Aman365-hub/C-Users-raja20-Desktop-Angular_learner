import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LearnerService {

  private url:string;
  constructor(private https:HttpClient) {
    this.url="http://localhost:8080/learner_app/"
   }

  public getAllLearner():Observable<learner[]>{

   return  this.https.get<learner[]>(this.url).
  }

  public createLearner(learner:learner){

    return this.https.post<learner>(this.url,learner);
  }

  public getLeanrerById(id:number):Observable<learner[]>{
    return this.https.get<learner>(this.url+"/"+id);

  }

}