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
  ufs : UF[];
  dados_da_samu : Dados[];
  uf_dados : UF;
  municipios_atendidos: Dados[] = [];
  media : number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf_dados = this.defineUF();
        this.media = this.calcularMedia();
    }
    defineUF(): UF {
      for(let uf of this.ufs){
       if(uf.id == 42) return uf;
     }
      }
      calcularMedia(): number{
        var qtd = 0;
        var total = 0;
        for(let mun of this.dados_da_samu){
          if(mun.uf_id == 42){
            qtd++;
            total += mun.valor;
            this.municipios_atendidos.push(mun);
      }
      return Math.round(total/qtd);
    }
  }
}
