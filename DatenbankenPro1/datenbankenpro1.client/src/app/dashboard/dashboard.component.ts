import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailedProjectComponent } from '../detailed-project/detailed-project.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  openProject(projectId: number) {
    // Logik zum Öffnen eines Projekts
  }

  constructor(public dialog: MatDialog) { }

  recentProjects = [
    { id: 1, name: 'Projekt A', lastModified: new Date(), detailsVisible: false, isRecording: false },
    { id: 2, name: 'Projekt B', lastModified: new Date(), detailsVisible: false, isRecording: false }
  ];

  toggleDetails(project: any) {
    project.detailsVisible = !project.detailsVisible;
  }

  toggleTimeProtocol(project: any) {
    project.isRecording = !project.isRecording;
  }

  startTimeProtocol(project: any) {
    project.isRecording = true;
    //Logik zum Starten der Zeitaufzeichnung
    console.log("Starte Zeitaufzeichnung für Projekt", project);
  }
  stopTimeProtocol(project: any) {
    project.isRecording = false;
    //Logik zum Stoppen der Zeitaufzeichnung
    console.log("Stoppe Zeitaufzeichnung für Projekt", project);
  }

  startProject() {
    console.log('Starte ein neues Projekt');
    const dialogRef = this.dialog.open(DetailedProjectComponent, {
      width: '250px',
      data: {} // Daten, die Sie übergeben möchten
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Der Dialog wurde geschlossen');
      //Speichern in Datenbank
    });
  }

  // Methode zum Bearbeiten eines Projekts
  editProject(project: any) {
    console.log('Bearbeiten des Projekts:', project);
    // Hier können Sie Logik hinzufügen, um das Projekt zu bearbeiten
    // Zum Beispiel das Öffnen eines Dialogs mit einem Formular zum Bearbeiten
  }

}
