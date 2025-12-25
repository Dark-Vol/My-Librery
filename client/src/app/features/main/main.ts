import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnStartReading } from "../../shared/components/buttons/btn-start-reading/btn-start-reading";

@Component({
  selector: 'app-main',
  imports: [CommonModule, BtnStartReading],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  features = [
    {
      icon: '📚',
      title: 'Большая коллекция',
      description: 'Тысячи книг на любой вкус и интерес'
    },
    {
      icon: '🔍',
      title: 'Удобный поиск',
      description: 'Быстрый и точный поиск по всей библиотеке'
    },
    {
      icon: '⭐',
      title: 'Рекомендации',
      description: 'Персональные рекомендации на основе ваших предпочтений'
    },
    {
      icon: '📱',
      title: 'Доступ везде',
      description: 'Читайте книги на любом устройстве в любое время'
    }
  ];
}
