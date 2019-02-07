import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockCreateComponent } from './block-create/block-create.component';
import { LoginComponent } from './login/login.component';
import { BlockappComponent } from './blockapp/blockapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlockListComponent,
    BlockCreateComponent,
    LoginComponent,
    BlockappComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
