import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  categoryList = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 2, name: 'Languages' }
  ];
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
