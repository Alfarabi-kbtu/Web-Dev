import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  currentImageIndex = 0;

  like(): void {
    if (this.product.likes === 0) {
      this.product.likes = 1;
    } else {
      this.product.likes = 0;
    }
  }

  delete(): void {
    this.deleteProduct.emit(this.product.id);
  }

  nextImage(): void {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.product.images.length - 1;
    }
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  shareWhatsApp(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри на этот товар: ${this.product.name}`);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри на этот товар: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}