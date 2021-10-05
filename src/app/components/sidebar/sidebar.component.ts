import {Component, Injectable, OnInit} from '@angular/core';
import { ExpertService } from 'src/app/services/expert.service';
import { Experts } from 'src/app/domain/expert';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
  
})
export class SidebarComponent implements OnInit {
    experts: Experts[];
    expert:any;
    HighlightRow : Number;  
    Employee : any;  
    ClickedRow:any;    
    constructor(private expertService: ExpertService) { 
      this.ClickedRow = function(index){  
        this.HighlightRow = index;  
    }  
    }
    
    ngOnInit() { 
      this.expertService.getExperts().then(data=>{this.experts=data});
    }
      getDetails(id:number)
      {
        this.expertService.getExpert(id).subscribe(data=>{this.expert=data});
        this.expertService.CommunicateExpert(this.expert);
      }

}
