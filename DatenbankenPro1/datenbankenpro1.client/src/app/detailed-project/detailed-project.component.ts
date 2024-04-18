import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-detailed-project',
  templateUrl: './detailed-project.component.html',
  styleUrl: './detailed-project.component.css'
})
export class DetailedProjectComponent {

  selectedProject: Project;

  constructor() {
    // Stellen Sie sicher, dass das Projekt mit einem gültigen Datum initialisiert wird
    this.selectedProject = new Project(1, 'Projekt A', new Date());
  }

  participants = [
    { name: 'Max Mustermann', role: 'Entwickler' },
    { name: 'Erika Mustermann', role: 'Projektmanager' }
  ];

  activityLogs = [
    { entry: 'Projekt gestartet', date: new Date() },
    { entry: 'Besprechung', date: new Date() }
  ];

  addTimestamp() {
    // Logik zum Hinzufügen eines Zeitstempels
  }
}
