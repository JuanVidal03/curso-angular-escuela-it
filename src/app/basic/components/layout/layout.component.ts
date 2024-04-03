import { Component } from '@angular/core';

interface User {
  name:string;
  age:number;
  isSingle:boolean;
  avatar:string
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
   // nombre inicial
   nombre:string = 'Juan';
   // cambiar el nombre
   changeName(){
     this.nombre == 'Juan' ? this.nombre = 'Carlos' : this.nombre = 'Juan';
   }
 
   // elementos que van a ser renderizados desde el html
   bandasDeRock = ['Nirvana', 'KISS', 'Guns and Roses'];
 
   // nombre de la banda a agregar
   rockBandName!:string;
   // agregar bandas y limpiando el input
   addRockBand(){
     this.bandasDeRock.push(this.rockBandName);
     this.rockBandName = '';
   }
   // limpiar el array de bandas de rock
   limpiarContenido(){
     this.bandasDeRock = [];
   }
   // eliminar una banda de rock
   deleteRockBand(index:number){
     this.bandasDeRock.splice(index, 1);
   }
   // actualizar banda
   updateItem(index:number): void{
     this.bandasDeRock[index] = 'se cambio el nombre';
   }
 
   // array con objetos
   users:User[] = [
     {
       name: 'Juan Vidal',
       age: 20,
       isSingle: false,
       avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg'
     },
     {
       name: 'Daniela Juspian',
       age: 21,
       isSingle: false,
       avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
     },
     {
       name: 'Carlos Lopez',
       age: 22,
       isSingle: true,
       avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
     }
   ]
 
}
