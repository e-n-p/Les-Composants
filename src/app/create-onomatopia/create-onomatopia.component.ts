import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})
export class CreateOnomatopiaComponent {

    newOnomatopia:string = "";

    @Output()
    onomatopiaEvent: EventEmitter<string> = new EventEmitter(); 

    createOnomatopia(): void{
      console.log(this.newOnomatopia);
      this.onomatopiaEvent.emit(this.newOnomatopia);
      this.newOnomatopia = "";
    }
}
