import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
    coder = new Developer(
      "Daniels",
      "Mark",
      44,
      "Male",
      "From Kentucky",
      [
        new Skill("WebDev","will make you a website","www.aWebSi.te"),
        new Skill("Scripter","Hack the world","www.fbi.gov")
      ]
    );
}
