export class Curso {

    constructor(fields: any) {
    //   // Quick and dirty extend/assign fields to this model
    //   for (const f in fields) {
    //     // @ts-ignore
    //     this[f] = fields[f];
    //   }
    }
  
  }



export interface Curso {
  nombreCurso:string;
  fotoCurso:string;
  decripcionCurso:string;
}