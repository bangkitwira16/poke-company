import { Component } from '@angular/core';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [PokemonListComponent],
  template: '<app-pokemon-list></app-pokemon-list>',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {}
