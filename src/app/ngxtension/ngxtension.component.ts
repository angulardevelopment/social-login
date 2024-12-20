import { Component } from '@angular/core';
import { ClickOutside } from 'ngxtension/click-outside';
@Component({
  selector: 'app-ngxtension',
  imports: [ClickOutside],
  templateUrl: './ngxtension.component.html',
  styleUrl: './ngxtension.component.scss'
})
export class NgxtensionComponent {
  close() {
    console.log('close')
    // close logic
  }
}
