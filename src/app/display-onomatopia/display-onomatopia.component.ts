import { Component } from '@angular/core';

@Component({
  selector: 'app-display-onomatopia',
  templateUrl: './display-onomatopia.component.html',
  styleUrl: './display-onomatopia.component.css'
})
export class DisplayOnomatopiaComponent {

    onomatopeiaList:Array<string> = [];

    onReceiveNewOnomatopia(event: string): void {
      this.onomatopeiaList.push(event);
    }
}
