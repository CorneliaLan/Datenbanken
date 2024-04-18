import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  projects = [
    "Projekt 1", "Projekt 2", "Projekt 3", "Projekt 4"
  ];
  editProject(project: any) {

  }
  detailedProject(project:any){

  }
}


