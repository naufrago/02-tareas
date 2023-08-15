import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {
  
  constructor(private tareasService:TareasService) {
    // console.log(tareasService);
   }

  ngOnInit(): void {
  }

  get tareas (){
    return this.tareasService.tareas;
  }
  delete(i:any){
    this.tareasService.deleteTarea(i);
  }

  complete(i:any){
    this.tareasService.completarTarea(i)
  }

}
