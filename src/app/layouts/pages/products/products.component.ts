import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    if (localStorage != null) {
      localStorage.setItem('currentPage', '/products')
    }
  }
}