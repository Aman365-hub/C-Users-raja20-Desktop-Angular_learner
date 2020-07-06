import { Component, OnInit } from '@angular/core';
import { LearnerService } from '../learner.service';

@Component({
  selector: 'app-learnerlist',
  templateUrl: './learnerlist.component.html',
  styleUrls: ['./learnerlist.component.css']
})
export class LearnerlistComponent implements OnInit {
 private learners:Learner[];

  constructor(private service:LearnerService) { }

  ngOnInit(): void {
    this.service.getAllLearner().subscribe(data=>{
      this.learners=data;
    })
    

  }

}
