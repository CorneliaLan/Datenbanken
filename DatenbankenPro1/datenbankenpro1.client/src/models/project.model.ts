// project.model.ts

export class Project {
  id: number;
  name: string;
  lastModified: Date;
  detailsVisible: boolean;
  timeProtocollActive: boolean;
  description?: string;
  deadline: Date; // deadline darf nicht null sein
  sharedProject: boolean;
  sharedWith: string[];
  sumHoursSoll: number;
  sumHoursIst: number;
  sumHoursDiff: number;
  sumHoursPerPerson: number;
  countDays: number;

  constructor(
    id: number,
    name: string,
    deadline: Date, // Deadline als obligatorisches Argument
    description?: string
  ) {
    this.id = id;
    this.name = name;
    this.deadline = deadline; // Muss bei der Instanziierung angegeben werden
    this.lastModified = new Date();
    this.detailsVisible = false;
    this.timeProtocollActive = false;
    this.description = description;
    this.sharedProject = false;
    this.sharedWith = [];
    this.sumHoursSoll = 0;
    this.sumHoursIst = 0;
    this.sumHoursDiff = 0;
    this.sumHoursPerPerson = 0;
    this.countDays = 0;
  }
}
