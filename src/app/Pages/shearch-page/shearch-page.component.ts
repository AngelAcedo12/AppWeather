import { Component, inject } from '@angular/core';
import { WeaterService } from '../../services/weater.service';

@Component({
  selector: 'app-shearch-page',
  templateUrl: './shearch-page.component.html',
  styleUrl: './shearch-page.component.css'
})
export class ShearchPageComponent {

  public wheaterService  = inject(WeaterService)

  
  
}
