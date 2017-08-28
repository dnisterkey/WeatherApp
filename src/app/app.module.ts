import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MdInputModule,
         MdButtonModule,
         MdAutocompleteModule,
        MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MdInputModule,
    MdButtonModule,
    MdAutocompleteModule,
    MdCardModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
