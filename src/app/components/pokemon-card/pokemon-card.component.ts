import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import {
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
} from '@angular/material/card'; // ✅ Import MatCardModule

@Component({
  selector: 'app-pokemon-card',
  imports: [
    CommonModule,
    MatCardModule,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
}
