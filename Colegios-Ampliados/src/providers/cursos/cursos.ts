
import { Injectable } from '@angular/core';
import { Curso } from '../../models/curso';
@Injectable()
export class CursosProvider {

  cursos: Curso[];

  defaultItem: Curso = {
    nombreCurso: "Burt Bear",
    fotoCurso: "assets/img/speakers/bear.jpg",
    decripcionCurso: "Burt is a Bear.",
  };

  
  constructor() {
    let cursos = [
      {
        nombreCurso: "Burt Bear",
        fotoCurso: "assets/img/speakers/bear.jpg",
        decripcionCurso: "Burt is a Bear."
      },
      {
        nombreCurso: "Charlie Cheetah",
        fotoCurso: "assets/img/speakers/cheetah.jpg",
        decripcionCurso: "Charlie is a Cheetah."
      },
      {
        nombreCurso: "Donald Duck",
        fotoCurso: "assets/img/speakers/duck.jpg",
        decripcionCurso: "Donald is a Duck."
      },
      {
        nombreCurso: "Eva Eagle",
        fotoCurso: "assets/img/speakers/eagle.jpg",
        decripcionCurso: "Eva is an Eagle."
      },
      {
        nombreCurso: "Ellie Elephant",
        fotoCurso: "assets/img/speakers/elephant.jpg",
        decripcionCurso: "Ellie is an Elephant."
      },
      {
        nombreCurso: "Molly Mouse",
        fotoCurso: "assets/img/speakers/mouse.jpg",
        decripcionCurso: "Molly is a Mouse."
      },
      {
        nombreCurso: "Paul Puppy",
        fotoCurso: "assets/img/speakers/puppy.jpg",
        decripcionCurso: "Paul is a Puppy."
      }
    ];

    for (let curso of cursos) {
      this.cursos.push(new Curso(curso));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.cursos;
    }

    return this.cursos.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(curso: Curso) {
    this.cursos.push(curso);
  }

  delete(curso: Curso) {
    this.cursos.splice(this.cursos.indexOf(curso), 1);
  }

}
