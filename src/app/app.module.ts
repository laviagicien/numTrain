import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DestinationChoiceComponent } from './destination-choice/destination-choice.component';
import { TimeChoiceComponent } from './time-choice/time-choice.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { ShowTrainComponent } from './show-train/show-train.component';
import { ActiveStateDirective } from './active-state.directive';



@NgModule({
  declarations: [
    AppComponent,
    DestinationChoiceComponent,
    TimeChoiceComponent,
    ButtonPanelComponent,
    ShowTrainComponent,
    ActiveStateDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
