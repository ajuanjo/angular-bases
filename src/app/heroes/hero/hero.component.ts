import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get CapitalizeName(){
    return 'Hola Mundo'.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }

  changeHero():void{
    this.name = 'spiderman';
  }

  changeAge():void{
    this.age = 30;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
