import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import {UF} from '../types/uf';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Dados[]{
    var munAtendidos : Dados[] = [];
    for(let mun of VALORES){
      if(mun.uf_id == uf.id) munAtendidos.push(mun);}
      return munAtendidos;
    }

  }
