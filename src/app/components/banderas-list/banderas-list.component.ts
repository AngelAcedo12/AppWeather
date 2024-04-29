import { Component, Input } from '@angular/core';
import { DtoBanderas } from 'models/DTO/DtoBanderas';

@Component({
  selector: 'app-banderas-list',
  templateUrl: './banderas-list.component.html',
  styleUrl: './banderas-list.component.css'
})
export class BanderasListComponent {

  @Input() banderas: DtoBanderas[] | undefined ;




}
