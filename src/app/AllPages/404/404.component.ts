import { Component } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

@Component({
  standalone: true,
  imports:[SharedModule],
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrl: './404.component.css'
})
export class NotFoundComponent {

}
