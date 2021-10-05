import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Experts } from 'src/app/domain/expert';
import { ExpertService } from 'src/app/services/expert.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
@Input()
 expert:any;

 expertdetails:any;
  constructor(private expertService: ExpertService) { }

  ngOnInit() { 
   
   }



}
