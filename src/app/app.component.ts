import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    uf_id = '';
    area = '';
    ufs : UF[];
    dados_da_samu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.defineTitle();
        //this.detailUF();
    }
    defineTitle(): void {
      for(let uf of this.ufs){
        if(uf.id == 42) this.title = uf.nome;
      }

      //detailUF(): void{
        //for(let uf of this.ufs){
          //if(uf.id == 42)
      //this.uf_id = String(uf.id);
      //this.area = String(uf.area);
    }
  }
