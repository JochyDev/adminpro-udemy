import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress!: ElementRef;

  @Input('nombre') leyenda: string="Leyenda";
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(){
  }

  onChanges(newValue: number){
    
    // let elemHTML: any = document.getElementsByName('progreso')[0];



    console.log(newValue);
    if (newValue > 100 ){
      this.progreso = 100;
    } else if (newValue < 0){
      this.progreso = 0;
    }else{
    this.progreso = newValue;
    }

    // elemHTML.value = this.progreso

    this.txtProgress.nativeElement.value = this.progreso

    this.cambioValor.emit(this.progreso)
  }

  cambiarValor(valor: number){

    this.progreso = this.progreso + valor;
    console.log('Suma', this.progreso)
  
    if (this.progreso > 100 ){
      this.progreso = 100;
    } else if (this.progreso < 0){
      this.progreso = 0;
    }

    this.cambioValor.emit(this.progreso)
    
    this.txtProgress.nativeElement.focus();

  }
  
}
