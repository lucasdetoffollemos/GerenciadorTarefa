import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar/tarefa-listar.component';
import { FooterComponent } from './navegacao/footer/footer/footer.component';
import { HeaderComponent } from './navegacao/header/header/header.component';
import { MenuComponent } from './navegacao/menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TarefaListarComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
