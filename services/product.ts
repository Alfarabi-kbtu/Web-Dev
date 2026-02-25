import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Devices' },
      { id: 2, name: 'Music' },
      { id: 3, name: 'Home' },
      { id: 4, name: 'Sport' },
      { id: 5, name: 'Iphone' },
    ];
  }

  getProducts(): Product[] {
    return [
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
      link: 'https://l.kaspi.kz/shop/21TutFt47bRyRwx',
      categoryName: 'Devices',
      categoryId: 1,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/GnfxrCKNcw41sQz',
      categoryName: 'Home',
      categoryId: 3,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/GB5mTaD4okr9Q8M',
      categoryName: 'Home',
      categoryId: 3,
      likes: 0
    },
    {
      id: 4,
      name: 'iPhone 17 Pro Max 2Tb',
      description: 'Apple iPhone 17 Pro Max 2Tb — флагманский смартфон с передовыми технологиями и непревзойденной производительностью для самых требовательных пользователей.',
      price: 1456812,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p00/64475965.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p58/64169951.png?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/8kQCVYUpdTv7Cu6',
      categoryName: 'Devices',
      categoryId: 1,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/5xYpQ9bHJ18qpPw',
      categoryName: 'Sport',
      categoryId: 4,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/5ZaHradJXhr3zY3',
      categoryName: 'Devices',
      categoryId: 1,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/6UwsC8X1YKAcurF',
      categoryName: 'Home',
      categoryId: 3,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/sGbocp4VpaDUeXb',
      categoryName: 'Home',
      categoryId: 3,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/7qudNazXsVskJcq',
      categoryName: 'Devices',
      categoryId: 1,
      likes: 0
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
      link: 'https://l.kaspi.kz/shop/7qsh4Pkjc8bSP8V',
      categoryName: 'Music',
      categoryId: 2,
      likes: 0
    },
    {
      id: 11,
      name: 'Gibson электрогитара',
      description: 'GIBSON 1968 Les Paul Custom Reissue Gloss Ebony воплощение легенды в деталях Историческая точность и роскошь',
      price: 3201890,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p06/57230228.png?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p06/57230229.png?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p04/57230230.png?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p1b/p04/57230232.png?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/HyXjqhsJ8BrUCyZ',
      categoryName: 'Music',
      categoryId: 2,
      likes: 0
    },
    {
      id: 12,
      name: 'Акустические барабаны',
      description: 'Полноценная акустическая барабанная установка Black Edition — идеальный выбор как для начинающих, так и для опытных музыкантов, ценящих мощное звучание и стильный внешний вид.',
      price: 250000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4b/p3c/58709644.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4b/p3c/58709644.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p2e/58709648.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pda/p1f/58709650.jpeg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/6vh28HqHW24WD4k',
      categoryName: 'Music',
      categoryId: 2,
      likes: 0
    },
    {
      id: 13,
      name: 'Скрипка Gliga PS-V044',
      description: 'Смычок-Doerfler, Покрытие-матовый лак, Комплектация-кейс, смычок',
      price: 1250000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h7f/86256561258526.jpg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h96/h54/86256561324062.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/86256561520670.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hb2/86256561651742.jpg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/GZsDCpCLgmNPteJ',
      categoryName: 'Music',
      categoryId: 2,
      likes: 0
    },
    {
      id: 14,
      name: 'Сазсырнай-окарина',
      description: 'Сазсырнай — музыка степей в твоих руках!',
      price: 3500,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p92/97380835.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2d/p92/97380835.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p2d/p92/97380835.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p99/97380837.jpeg?format=gallery-small'
      ],
      link: 'https://kaspi.kz/shop/p/poluprofessional-nyi-sazsyrnai-korichnevyi-142847594/?c=750000000',
      categoryName: 'Music',
      categoryId: 2,
      likes: 0
    },
    {
      id: 15,
      name: 'Смартфон Redmi A3x',
      description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном',
      price: 39900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-small'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      categoryName: 'Devices',
      categoryId: 1,
      likes: 0
    },
    {
      id: 16,
      name: 'Блендер 3 в 1 Aulandi',
      description: 'Aulandi 200G — не просто блендер. Это умный помощник, который легко заменит три прибора на вашей кухне.',
      price: 44800,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc6/p4b/99328285.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7e/56025168.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p34/p2c/56025171.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p1b/56025176.jpeg?format=gallery-small'
      ],
      link: 'https://kaspi.kz/shop/p/blender-3-v-1-aulandi-hs-200g-chernyi-seryi-142808371/?c=750000000',
      categoryName: 'Home',
      categoryId: 3,
      likes: 0
    },
    {
      id: 17,
      name: 'Сумка',
      description: 'Тренировочные лапы ELF-ELAST — это профессиональный инструмент для бокса и единоборств, который обеспечивает максимальную защиту и комфорт во время тренировок. Изготовленные из натуральной кожи, они гарантируют долговечность и высокое качество.',
      price: 3006,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p73/p3a/34264001.jpg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p73/p3a/34264001.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pce/pe1/34264004.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p3e/p82/34264011.jpeg?format=gallery-small'
      ],
      link: 'https://kaspi.kz/shop/p/sumka-30209308-511111668-23-chernyi-117523925/?c=750000000',
      categoryName: 'Sport',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Тренировочный снаряд',
      description: 'Инновационный тренажёр для бокса Metasport MS-05 — это премиальная станция для развития скорости, точности, реакции и силы удара. ',
      price: 360000,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdf/pb2/81724153.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/pb2/81724153.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/pb2/81724153.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/pb2/81724153.jpeg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/7GMPjZN82rZQKzz',
      categoryName: 'Sport',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Ринг Напольный',
      description: 'Ринг боксёрский устанавливают в закрытых помещениях, полы в которых выдерживают распределительную нагрузку не менее 10 тонн, а расстояние от стен не менее 2 метров',
      price: 4400000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/p5e/110440154.jpeg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p89/p5e/110440154.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p89/p5e/110440154.jpeg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/p89/p5e/110440154.jpeg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/Da2deN81W2RsvZY',
      categoryName: 'Sport',
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'Боксерские перчатки TOPTEN',
      description: 'Боксерские перчатки TOPTEN 6 oz синий',
      price: 300030,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/h93/83045105991710.jpg?format=gallery-small',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h93/83045105991710.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/hfa/83045106515998.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/hd8/83045107040286.jpg?format=gallery-small'
      ],
      link: 'https://l.kaspi.kz/shop/3Vzm1VBUY8ywiph',
      categoryName: 'Sport',
      categoryId: 4,
      likes: 0
    },
    {
      id: 21,
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
      link: 'https://l.kaspi.kz/shop/21TutFt47bRyRwx',
      categoryName: 'Iphone',
      categoryId: 5,
      likes: 0
    },
    {
      id: 22,
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
      link: 'https://l.kaspi.kz/shop/21TutFt47bRyRwx',
      categoryName: 'Iphone',
      categoryId: 5,
      likes: 0
    }
    ];
  }
}