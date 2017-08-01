import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component'
import { HttpModule }    from '@angular/http';

import {ResumoComponent} from './resumo/resumo.component';
import {todosDadosComponent} from './todosDados/todosDados.component';
import {dadosDaUFComponent} from './dados/dadosDaUF.component';

import { RouterModule }   from '@angular/router';

import {UFService} from './services/uf.service'
import {SamuService} from './services/samu.service'
import {MetodoTodosService} from './services/metodoTodos.service'

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    todosDadosComponent,
    dadosDaUFComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
    RouterModule.forRoot([
    {
    path: 'resumo',
    component: ResumoComponent
  },
  {
    path: 'dadosDaUF',
    component: dadosDaUFComponent
  },
{
path: 'todosDados',
component: todosDadosComponent
}
    ])
  ],
  providers: [SamuService, UFService, MetodoTodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
