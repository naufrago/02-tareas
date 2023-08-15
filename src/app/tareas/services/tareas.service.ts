import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareas:Array<Tarea>= [
    {
      tarea:'barrer',
      completada: false
    },
    {
      tarea:'correr',
      completada: false
    },
    {
      tarea:'cocinar',
      completada: false
    },
    {
      tarea:'leer',
      completada: false
    }
    ]

  constructor() { }

  deleteTarea(i: any){
   this.tareas =this.tareas.filter(tarea => tarea.tarea !== i)
  // this.tareas.splice(i,1)
  //  console.log(this.tareas, i);
  }
  completarTarea(i:any){
    const tarea = this.tareas.find(tarea=>{
      return tarea.tarea===i
    })!
    tarea.completada=!tarea.completada
    console.log(this.tareas);
  }
}
