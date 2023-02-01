import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>){}


  eliminarHeroe(){
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }
}
