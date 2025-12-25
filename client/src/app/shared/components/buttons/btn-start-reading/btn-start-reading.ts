import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-start-reading',
  standalone: true,
  imports: [],
  templateUrl: './btn-start-reading.html',
  styleUrl: './btn-start-reading.scss',
})
export class BtnStartReading {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
