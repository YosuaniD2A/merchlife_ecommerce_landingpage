import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormSubmitService } from 'src/app/services/form-submit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  activeForm: boolean = false;
  loading: boolean = false;
  invalidForm: boolean = false;
  formData: any = {
    _cc: "adam@conceptdrop.com",
    _template: "table",
  };

  constructor(private http: HttpClient, private formSubmitService: FormSubmitService, private router: Router) { }

  switchForm() {
    this.activeForm = !this.activeForm;
    window.scrollTo(0, 100);
  }

  onSubmit() {
    if (!this.isFormValid()) {
      this.invalidForm = true;
      return
    }
    this.loading = true;
    this.formSubmitService.submitForm(this.formData)
      .subscribe(
        response => {
          console.log(response);
          if (response.success) {
            this.loading = false;
            this.router.navigate(['/thanks']);
          }
        },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
  }

  isFormValid(): boolean {
    return (
      !(!this.formData.firstName || this.formData.firstName === "") &&
      !(!this.formData.lastName || this.formData.lastName === "") &&
      !(!this.formData.brandName || this.formData.brandName === "") &&
      !(!this.formData.email || this.formData.email === "")
    );
  }
}
