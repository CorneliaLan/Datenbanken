import { Component } from '@angular/core';
import * as moment from 'moment'; // Sie benötigen moment.js für Datumsoperationen, wenn Sie es verwenden möchten

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  projects = [
    { id: 1, name: 'Projekt Alpha' },
    { id: 2, name: 'Projekt Beta' }
  ]; // Beispielprojekte
  selectedProject: number; // Kein Initialwert notwendig, undefined zu Beginn ist ok, wenn in HTML gehandhabt
  startDate: Date = new Date(); // Standardmäßig auf das aktuelle Datum gesetzt
  endDate: Date = new Date(); // Standardmäßig auf das aktuelle Datum gesetzt
  chartData: any[]; // Daten für das Chart

  constructor() {
    this.selectedProject = 0;  // Example default value, adjust as necessary
    this.chartData = [];  // Initialize as empty array
  }

  generateReport() {
    if (!this.selectedProject) {
      alert('Bitte wählen Sie ein Projekt aus!');
      return;
    }
    // Beispiel Logik zur Generierung eines Berichts
    this.chartData = [
      {
        name: 'Arbeitsstunden', series: [
          { name: 'Montag', value: 8 },
          { name: 'Dienstag', value: 6 },
          { name: 'Mittwoch', value: 7 },
          { name: 'Donnerstag', value: 5 },
          { name: 'Freitag', value: 6 },
          { name: 'Samstag', value: 6 },
          { name: 'Sonntag', value: 6 }
        ]
      }
    ];
    // Hier würden Sie normalerweise Daten aus einem Service abrufen
  }

  exportData() {
    const dataToExport = this.chartData.map(item => {
      return {
        Projekt: item.name,
        Montag: item.series.find((day: { name: string; value: number }) => day.name === 'Montag')?.value,
        Dienstag: item.series.find((day: { name: string; value: number }) => day.name === 'Dienstag')?.value,
        Mittwoch: item.series.find((day: { name: string; value: number }) => day.name === 'Mittwoch')?.value,
        Donnerstag: item.series.find((day: { name: string; value: number }) => day.name === 'Donnerstag')?.value,
        Freitag: item.series.find((day: { name: string; value: number }) => day.name === 'Freitag')?.value,
        Samstag: item.series.find((day: { name: string; value: number }) => day.name === 'Samstag')?.value,
        Sonntag: item.series.find((day: { name: string; value: number }) => day.name === 'Sonntag')?.value,
        // Fügen Sie ähnliche Zeilen für andere Tage hinzu
      };
    });
    console.log('Exportierte Daten:', JSON.stringify(dataToExport));
  }

    // Fügen Sie hier Ihre Logik zum Exportieren der Daten als CSV oder PDF hinzu
  
}
