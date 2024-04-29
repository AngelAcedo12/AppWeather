import { Component, Input } from '@angular/core';
import { DtoBanderas } from 'models/DTO/DtoBanderas';

@Component({
  selector: 'app-bandera-item',
  templateUrl: './bandera-item.component.html',
  styleUrl: './bandera-item.component.css'
})
export class BanderaItemComponent {

  @Input() bandera: DtoBanderas | undefined;
}
