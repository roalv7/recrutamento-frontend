import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterestsInputComponent } from './components/interests-input/interests-input.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { ButtonInputComponent } from './components/button-input/button-input.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterestsInputComponent,
    MessageInputComponent,
    ButtonInputComponent,
    FormPageComponent,
    TextInputComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
