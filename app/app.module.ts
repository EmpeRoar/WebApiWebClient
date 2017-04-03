import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { HttpModule, JsonpModule } from '@angular/http';

import { BtcTableComponent }   from './shared/btc-table/btc-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,   
    BtcTableComponent,     
  ],
  providers: [
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
