import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { InterestsInputComponent } from './components/interests-input/interests-input.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { ButtonInputComponent } from './components/button-input/button-input.component';


@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    EmailInputComponent,
    InterestsInputComponent,
    MessageInputComponent,
    ButtonInputComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
