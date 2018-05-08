import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { ConnectedUserlistComponent } from "./components/connected-userlist/connected-userlist.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConnectedUserlistComponent],
  exports: [ConnectedUserlistComponent]
})
export class SharedModule { }
