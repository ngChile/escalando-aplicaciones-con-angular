import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship-postulations',
  templateUrl: './scholarship-postulations.component.html',
  styleUrls: ['./scholarship-postulations.component.scss']
})
export class ScholarshipPostulationsComponent implements OnInit {
  postulationsList: any[];

  ngOnInit() {
   this.postulationsList = [
     {
       name: 'Gonzalo',
       email: 'gonzalo@boolean.cl',
       reason: 'quiero aprender',
       status: 'rejected'
     },
     {
       name: 'Seba',
       email: 'seba@boolean.cl',
       reason: 'quiero aprender',
       status: 'awaiting'
     }
   ];
  }

}
