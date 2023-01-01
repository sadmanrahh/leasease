import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public showMyMessage = false
  public dontShowMyMessage = true

  showMessageSoon() {
  setTimeout(() => {
    this.showMyMessage = true
  }, 200)

  setTimeout(() => {
    this.dontShowMyMessage = false
  }, 200)
}



}
