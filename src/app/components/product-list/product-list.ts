import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple Wacth Ultra 3',
      description: 'Умные часы идеально подходят для спортсменов, путешественников и тех, кто следит за своим здоровьем. Удобные уведомления, возможность принимать звонки и управлять музыкой прямо с запястья.',
      price: 684568,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p85/65587897.jpg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p37/65587915.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p2d/65587942.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p85/65587897.jpg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/21TutFt47bRyRwx'
    },
    {
      id: 2,
      name: 'Массажное кресло',
      description: 'Массажное кресло “DIAM DM-01” — ваш личный SPA-салон дома!',
      price: 454500,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p01/106468735.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/p05/106468736.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p76/p08/106468737.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pe0/p0b/106468738.jpeg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/GnfxrCKNcw41sQz'
    },
    {
      id: 3,
      name: 'Колонка+караоке',
      description: 'Портативная колонка с 2 микрофоном с цветным дисплеем и двумя беспроводными радиомикрофонами — идеальный выбор для домашних вечеринок, семейных праздников и уличных мероприятий',
      price: 44999,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4c/p36/79487735.png?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p14/p36/79487737.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/p35/79487739.jpg?format=gallery-samll',
        'https://resources.cdn-kaspi.kz/img/m/p/p70/p33/79487740.jpg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/GB5mTaD4okr9Q8M'
    },
    {
      id: 4,
      name: 'Операвтиная память',
      description: 'Оперативная память Kingston Fury Renegade — высокопроизводительное решение для геймеров и профессионалов, обеспечивающее максимальную скорость и надежность в любых задачах.',
      price: 995000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/hbb/84786282135582.jpg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hb5/84786282201118.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h2a/84786282266654.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/hbb/84786282135582.jpg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/8b4wRty4HnM32jg'
    },
    {
      id: 5,
      name: 'Тренированые лапы',
      description: 'Тренировочные лапы ELF-ELAST — это профессиональный инструмент для бокса и единоборств, который обеспечивает максимальную защиту и комфорт во время тренировок. Изготовленные из натуральной кожи, они гарантируют долговечность и высокое качество.',
      price: 13000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8a/pce/38858924.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe3/pc0/38858928.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p72/38858930.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/pce/38858924.jpeg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/5xYpQ9bHJ18qpPw'
    },
    {
      id: 6,
      name: 'Фотокамера',
      description: 'Фотокамера моментальной печати Fujifilm Instax Mini Evo — это современное устройство, которое сочетает в себе высокое качество снимков и удобство использования. С её помощью вы сможете запечатлеть важные моменты и мгновенно получить их на память!',
      price: 126000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hdd/85037287047198.jpg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h5c/85037287112734.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/h8e/85037287178270.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h35/85037287243806.jpg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/5ZaHradJXhr3zY3'
    },
    {
      id: 7,
      name: 'Инверсионный стол',
      description: 'Тракционный стол 7modernq-1 — безопасное вытяжение позвоночника прямо у вас дома',
      price: 75000,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p57/66407722.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pad/p89/48132699.png?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/pd3/48132700.png?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/pd3/48132701.png?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/6UwsC8X1YKAcurF'
    },
    {
      id: 8,
      name: 'Пуфик',
      description: 'Кресло-мешок Pufi Dinmeca 462 — это современное решение для вашего комфорта, которое сочетает в себе удобство и стильный дизайн. Его универсальный размер подходит как взрослым, так и детям, а мягкий велюровый чехол добавляет уют в любой интерьер.',
      price: 16000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/p4e/82461538.bin?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p4e/82461539.bin?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/p4b/82461540.bin?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/pe5/74408637.png?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/sGbocp4VpaDUeXb'
    },
    {
      id: 9,
      name: 'Смарт очки',
      description: 'Очень удобные и лёгкие, можно носить целый день. Понравилось, что есть кейс для хранения, удобно брать с собой. Переводчик работает отлично, распознаёт быстро и точно. Звук чистый, микрофон хороший. Видео снимают тоже хорошо, картинка четкая. Фотохромные линзы очень удобны. И в помещении, и на улице можно пользоваться.',
      price: 64000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/p4c/95625593.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/p06/81799012.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p46/p00/81799014.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p19/p07/81799016.jpeg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/7qudNazXsVskJcq'
    },
    {
      id: 10,
      name: 'Рояль',
      description: 'Roland GP-6 среднего уровня предлагает превосходные функции GP в роскошном корпусе, который привносит чувство изысканности в любое пространство',
      price: 3106890,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haa/h89/81058500345886.jpg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/heb/h62/81058500608030.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h13/81058501394462.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h08/81058500476958.jpg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/7qsh4Pkjc8bSP8V'
    }
  ];

  shareProduct(product: Product) {
      const message = `Посмотри на этот товар: ${product.name}`;
      const url = encodeURIComponent(product.link);
      const text = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/?text=${text}%20${url}`;
      window.open(whatsappUrl, '_blank');
    }
  
  shareProduct2(product: Product) {
      const message = `Посмотри на этот товар: ${product.name}`;
      const url = encodeURIComponent(product.link);
      const text = encodeURIComponent(message);
      const telegramUrl = `https://t.me/share/url?url=${url}&text=${text}`;
      window.open(telegramUrl, '_blank');
    }
}