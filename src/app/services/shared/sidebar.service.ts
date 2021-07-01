import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-guage',
      submenu: [
        {titulo:'Dashboard', url:'/dashboard'},
        {titulo:'PregressBar', url:'/progress'},
        {titulo:'Graficas', url:'/grafica1'},
        {titulo:'Promesas', url:'/promesas'},
        {titulo:'Rxjs', url:'/rxjs'},

      ]
    }
  ]

  constructor() { }
}
