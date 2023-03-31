import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe = new HeroeModel();

  constructor(private heroesServices: HeroesService) {}

  ngOnInit() {}

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    }

    this.heroesServices.crearHeroe(this.heroe).subscribe((resp) => {
      console.log(resp);
    });
  }
}
