 
import { HttpClient } from '@angular/common/http';
import { Experts } from '../domain/expert';
import { Injectable, EventEmitter } from '@angular/core';    
import * as expertData from '../../assets/demo/data/experts.json';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
       
@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  sendExpert=new Subject();
  hitscore=1200;
  qualscore=1300;
  influencescore=2000;
  country="algeria";
  qualifications=["m.b.b.s"];
  researchstartyear=2000;
  expert:any;
  experts:any;
  constructor(private http: HttpClient) { 

  }
  CommunicateExpert(obj)
  {
    this.sendExpert.next(obj);
  }
  qualificationCheck(list1:string[],list2:string[]){
    
    for(let i=0;i<list1.length;i++)
    {
        list1[i]=list1[i].toLowerCase();
    }
    for(let i=0;i<list2.length;i++)
    {
        list2[i]=list2[i].toLowerCase();
    }
  if( Array.from(new Set(list1)).length == Array.from(new Set(list1.concat(list2)) ).length || 
  Array.from(new Set(list2)).length == Array.from(new Set(list2.concat(list1)) ).length
  )
    return true
  else{
    return false
  }
  }
 getExperts()
  {     
      this.experts=expertData;
      return this.http.get<any>('assets/demo/data/experts.json')
          .toPromise()
          .then(res=>res.data as Experts[]).then(data=>data) ;
  }
  getExpert(id:number)
  {
          this.experts.data.forEach(expert => {
            if(expert.id==id)
            {
              this.expert=new Observable( observer => {
                observer.next( expert )
                observer.complete()
              });
            }
          });
          return this.expert;
  }
  
  changeHitScore(hitScore:number){
    this.hitscore=Number(hitScore);
    console.log("updated hitscore");
    console.log(this.hitscore);
  }
  changeQualScore(qualScore:number){
    this.qualscore=Number(qualScore);
    console.log("updated qualscore");
    console.log(this.qualscore);
  }
  changeInfluScore(influScore:number){
    this.influencescore=Number(influScore);
    console.log("updated influscore");
    console.log(this.influencescore);
  }
  changeCountry(country:string)
  {
    this.country=country.toString();
    console.log("updated Country");
    console.log(this.country);
  }
  changeResearchStartYear(year:number)
  {
    this.researchstartyear=Number(year);
    console.log("updated Country");
    console.log(this.country);
  }

}
