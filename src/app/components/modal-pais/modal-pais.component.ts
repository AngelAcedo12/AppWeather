import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Currencies, DtoBanderas } from 'models/DTO/DtoBanderas';

@Component({
  selector: 'app-modal-pais',
  templateUrl: './modal-pais.component.html',
  styleUrl: './modal-pais.component.css'
})
export class ModalPaisComponent {

  @Input({required: true}) pais: DtoBanderas | undefined;
  @Input({required: true}) showModal: boolean | undefined;
  @Output() closeModal = new EventEmitter();
  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.pais)
    console.log(this.showModal)

    document.getElementById("detected")?.addEventListener("click",( event ) => this.close(event), this.showModal)

    this.getMoneda()
  }

  close(event : Event) {
    if(this.showModal == false) return
    console.log(event.target)
    if(event.target != document.getElementById("content")) {
      this.closeModal.emit();
    }
  }

  getMoneda(){
    if(this.pais == null) {
      return;
    } else {
      let currencies = this.pais.currencies;
      let currenciesKeys = currencies ? Object.keys(currencies) : [];
      let key = currenciesKeys[0];
      return (currencies as any)?.[`${key}`]
    }
  }
  getLenguajes(){
    if(this.pais == null) {
      return;
    } else {
      let languages = this.pais.languages;
      
      let languagesKeys = languages ? Object.keys(languages) : [];
      let key = languagesKeys;
      console.log(key)
      let arryLenguajes = key.map((key) => {
        return (languages as any)?.[`${key}`]
      })
      return arryLenguajes
    }
  }
}
