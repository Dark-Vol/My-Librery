import { Component } from '@angular/core';
import { BtnAddBooks } from '../components/btn-add-books/btn-add-books';

@Component({
  selector: 'app-catalog',
  imports: [BtnAddBooks],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {

}
