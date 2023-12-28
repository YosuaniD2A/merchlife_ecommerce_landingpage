import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegatorComponent } from './components/main/navegator/navegator.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { MainComponent } from './components/main/main.component';
import { ServicesComponent } from './components/main/services/services.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavegatorComponent,
    FooterComponent,
    MarqueeComponent,
    MainComponent,
    ServicesComponent,
    ThanksComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
