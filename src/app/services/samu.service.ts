import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  getPorUFMunicipiosAtendidosPorEstado(uf_id: number): Dados[]{
    var munAtendidos : Dados[] = [];
    for(let mun of VALORES){
      if(mun.uf_id == uf_id) munAtendidos.push(mun);}
      return munAtendidos;
    }

  }
