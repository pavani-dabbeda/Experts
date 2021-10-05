import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ExpertService } from 'src/app/services/expert.service';
@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss']
})
export class MainbodyComponent implements OnInit {
profile:boolean =false;
expert:any;
tabMenuItems: MenuItem[];
  constructor(private expertService :ExpertService) { }

  ngOnInit(): void {
    this.expertService.sendExpert.subscribe((data)=>{this.expert=data});
    if(this.expert==undefined)
    {
      this.expertService.getExpert(11).subscribe(data=>{this.expert=data});
    }
    this.tabMenuItems = [
      {label: 'Profile'},
      {label: 'Education'},
      {label: 'Sales'},
      {label: 'Profile'},
      {label: 'Settings'}
  ];
  }
  
}
