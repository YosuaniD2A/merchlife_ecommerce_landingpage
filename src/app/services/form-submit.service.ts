import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  constructor() { }

  submitForm(data: any): Observable<any> {
    const url = 'https://formsubmit.co/ajax/luis@smartprintsink.com';

    return from(
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
    );
  }
}
