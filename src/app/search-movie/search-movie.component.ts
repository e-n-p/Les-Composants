import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css'
})
export class SearchMovieComponent implements OnInit{

    mediaTypes: Array<string> = ["Film", "Series", "Episode"];
    lengthTypes: Array<string> = ["Long", "Short"];
    minMaxYears:Array<number> = [1900];
    searchMoviesForm!:FormGroup;


    constructor(private formBuilder: FormBuilder) {  //constructor should init first
      this.searchMoviesForm = this.formBuilder.group({
        identifiers: this.formBuilder.group({
          identifier: [''],
          title: [''],
        }),
        yearInfo: this.formBuilder.group({  //tried nesting as a way round the error
          releaseYear: ['']
        }),
        mediaType: ['Series'],
        // releaseYear: [0],
        length: ['']
      });
    }

    ngOnInit(): void {
      const date = new Date();
      this.minMaxYears.push(date.getFullYear());
      console.log("<--!!!-->");
      console.log(this.searchMoviesForm);
      console.log("<--!!!-->");
      this.searchMoviesForm.get('identifiers')!.setValidators([this.isRequiredValidator('identifier','title')]);
      this.searchMoviesForm.get('yearInfo.releaseYear')!.setValidators([Validators.required, this.rangeDateValidator(this.minMaxYears[0], this.minMaxYears[1])]);
      this.searchMoviesForm.get('identifiers')!.updateValueAndValidity();
      this.searchMoviesForm.get('yearInfo.releaseYear')!.updateValueAndValidity();
      
      this.searchMoviesForm.patchValue({
        length: "Short"
      });
    }

    onSubmit(): void{
      console.log(this.searchMoviesForm);
    }

    rangeDateValidator(minDate:number, maxDate:number): ValidatorFn{
      return (control: AbstractControl): ValidationErrors | null => {
        const current_value1:number = control.get(['yearInfo', 'releaseYear'])!.value;
        const current_value2:number = control.get('yearInfo.releaseYear')!?.value;
        console.log('>>>>>>' + current_value1);
        console.log('>>>>>>' + current_value2);

        if ( !((minDate <= current_value1) && (current_value1 <= maxDate)) ) {
          return { 'boundsError': {min: minDate, max: maxDate} }
        } else {
          return null;
        }
      }
    }

    isRequiredValidator(fieldOne:string, fieldTwo:string): ValidatorFn{
      return (control: AbstractControl): ValidationErrors | null => {
        const value1:string = control.get(fieldOne)!.value;
        const value2:string = control.get(fieldTwo)!.value;

        if (!value1 && !value2) {
          return {'isRequired': {expected: "One of the two fields 'Identifier' or 'Title' must be filled in"}}
        } else {
          return null;
        }
      }
    }
}
