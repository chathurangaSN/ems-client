import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmationDialogService } from './confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
//   exports: [  
//     ConfirmationDialogComponent  
// ],
  imports: [
    
  ],
  providers: [
    ConfirmationDialogService,
    //ConfirmationDialogService
  ],
})
export class ConfirmationDialogModule {

 }
