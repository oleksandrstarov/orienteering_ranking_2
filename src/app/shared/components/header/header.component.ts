import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: '/dashboard', label: 'Главная' },
    { path: '/rating', label: 'Рейтинг' },
    { path: '/competition', label: 'Соревнования' },
    { path: '/about-rating', label: 'О рейтинге' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
