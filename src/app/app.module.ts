import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StandaloneComponentComponent } from './standalone-component/standalone-component.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StandaloneComponentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
