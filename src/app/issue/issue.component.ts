import { Component, OnInit } from '@angular/core';
import { Issue } from '../models/issue.model';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issues: Issue[] = [new Issue(1574,'Montes, Daniel','Completed','Item from array','SO'), new Issue(1574,'Montes, Vidal','Open','This is the loop test','Hardware')]

  constructor() { }

  ngOnInit() {
  }

}
