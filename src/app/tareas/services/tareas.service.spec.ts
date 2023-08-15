import { TestBed } from '@angular/core/testing';
import { TareasService } from './tareas.service';

describe('TareasService', () => {
    let service : TareasService
  beforeEach( () => {
    service = new TareasService()
  });

  it("ToBe: verifica si el servicio inicia con 4 tareas", ()=>{
    expect(service.tareas.length).toBe(4)
  })

  it("delete: verifica si el servicio borra la tarea leer", ()=>{
    service.deleteTarea('leer')
    expect(service.tareas.length).toBe(3)
  })
 
  it("no delete: verifica no borre tareas si no existe ", ()=>{
    service.deleteTarea('abc')

    expect(service.tareas.length).toBe(4)
  })
  it("spy: deberia llamar a la funcion completar una sola vez ", ()=>{
    const espia = jasmine.createSpyObj('TareasService',['completarTarea'])
    espia.completarTarea()

    expect(espia.completarTarea.calls.count()).toBe(1)
  })
});
