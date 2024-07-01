import { CarDetailInfo } from '../DetailInfoPage';
import EmgrandNew from '../assets/Emgrand New.webp';
import React from 'react';
import ToyotaCamry from '../assets/Toyota Camry.webp';
import tank300 from '../assets/tank300.webp';

export const cars: CarDetailInfo[] = [
  {
    id: 1,
    image: ToyotaCamry,
    name: 'Toyota Camry 2.0 AT Стандарт 2020',
    bodyLength: 4885,
    bodyWidth: 1840,
    bodyHeight: 1455,
    wheelbase: 2560,
    clearance: 160,
    details: [
      {
        name: 'Основные параметры',
        params: [
          {
            name: 'Период выпуска',
            value: '2021 -',
          },
          {
            name: 'Тип привода',
            value: 'Передний',
          },
          {
            name: 'Тип кузова',
            value: 'Седан',
          },
          {
            name: 'Тип трансмиссии',
            value: 'Вариатор',
          },
          {
            name: 'Объем двигателя, куб.см',
            value: '1986',
          },
          {
            name: 'Максимальная скорость, км/ч',
            value: '210',
          },
          {
            name: 'Число дверей',
            value: '4',
          },
          {
            name: 'Левый руль',
            value: 'Да',
          },
          {
            name: 'Рекомендованная цена новой машины, руб',
            value: '1 880 500',
          },
          {
            name: 'Марка кузова',
            value: 'MXV70',
          },
          {
            name: 'Клиренс (высота дорожного просвета), мм',
            value: '155',
          },
          {
            name: 'Страна сборки',
            value: 'Россия',
          },
          {
            name: 'Зимняя комплектация',
            value: 'Да',
          },
          {
            name: 'Гарантия производителя',
            value: '3 года или 100 000 км пробега',
          },
        ],
      },
      {
        name: 'Размеры',
        params: [
          {
            name: 'Число мест',
            value: '5',
          },
          {
            name: 'Количество рядов сидений',
            value: '2',
          },
          {
            name: 'Колесная база, мм',
            value: '2825',
          },
          {
            name: 'Ширина передней колеи, мм',
            value: '1590',
          },
          {
            name: 'Ширина задней колеи, мм',
            value: '1610',
          },
          {
            name: 'Масса, кг',
            value: '1560',
          },
          {
            name: 'Допустимая полная масса, кг',
            value: '2030',
          },
          {
            name: 'Максимальная грузоподъёмность',
            value: '470',
          },
          {
            name: 'Объем багажника, л',
            value: '524',
          },
          {
            name: 'Объем топливного бака, л',
            value: '60',
          },
        ],
      },
      {
        name: 'Двигатель, коробка передач и рулевое управление',
        params: [
          {
            name: 'Максимальная мощность, л.с. (кВт) при об./мин',
            value: '150 л.с.',
          },
          {
            name: 'Максимальный крутящий момент, Н*м (кг*м) при об./мин',
            value: '206 (21) / 4900',
          },
          {
            name: 'Тип двигателя',
            value: 'Рядный, 4-цилиндровый',
          },
          {
            name: 'Используемое топливо',
            value: 'Бензин АИ-92',
          },
          {
            name: 'Нагнетатель',
            value: 'Нет',
          },
          {
            name: 'Количество клапанов на цилиндр',
            value: '4',
          },
          {
            name: 'Удельная мощность, кг/л.с.',
            value: '10.40',
          },
          {
            name: 'Марка двигателя',
            value: 'M20A-FKS',
          },
          {
            name: 'Доп. информация о двигателе',
            value: 'extraoption',
          },
          {
            name: 'Степень сжатия',
            value: '13',
          },
          {
            name: 'Диаметр цилиндра, мм',
            value: '80.5',
          },
          {
            name: 'Ход поршня, мм',
            value: '80.5',
          },
          {
            name: 'Привод клапанов',
            value: 'extraoption',
          },
          {
            name: 'Поддержка ручного переключения передач',
            value: 'Нет',
          },
          {
            name: 'Электроусилитель руля',
            value: 'Да',
          },
          {
            name: 'Тип рулевого управления',
            value: 'Шестерня-рейка',
          },
          {
            name: 'Гидроусилитель руля',
            value: 'Нет',
          },
        ],
      },
      {
        name: 'Подвеска / Ходовая часть',
        params: [
          {
            name: 'Передняя подвеска',
            value: 'Независимая, амортизационная стойка типа МакФерсон',
          },
          {
            name: 'Задняя подвеска',
            value: 'Независимая, на двойных поперечных рычагах',
          },
          {
            name: 'Передний стабилизатор',
            value: 'Да',
          },
          {
            name: 'Задний стабилизатор',
            value: 'Да',
          },
          {
            name: 'Алюминиевые колесные диски',
            value: 'Да',
          },
          {
            name: 'Размер дисков',
            value: '17"',
          },
          {
            name: 'Передние тормоза',
            value: 'Дисковые вентилируемые',
          },
          {
            name: 'Задние тормоза',
            value: 'Дисковые',
          },
          {
            name: 'Стояночный тормоз',
            value: 'Электронный',
          },
          {
            name: 'Передние колеса',
            value: '215/55 R17',
          },
          {
            name: 'Задние колеса',
            value: '215/55 R17',
          },
        ],
      },
      {
        name: 'Экстерьер и внешнее оснащение',
        params: [
          {
            name: 'Передние противотуманные фары',
            value: 'Да',
          },
          {
            name: 'Датчик света',
            value: 'Да',
          },
          {
            name: 'Светодиодные противотуманные фары',
            value: 'Да',
          },
          {
            name: 'Светодиодные фары',
            value: 'Да',
          },
          {
            name: 'Cветодиодные задние фонари',
            value: 'Да',
          },
          {
            name: 'Светодиодные ходовые огни',
            value: 'Да',
          },
          {
            name: 'Задние противотуманные фонари',
            value: 'Да',
          },
          {
            name: 'Омыватели передних фар',
            value: 'Нет',
          },
          {
            name: 'Ксеноновые фары',
            value: 'Нет',
          },
          {
            name: 'Боковые зеркала в цвет кузова',
            value: 'Да',
          },
          {
            name: 'Электроподогрев зеркал',
            value: 'Да',
          },
          {
            name: 'Электропривод боковых зеркал',
            value: 'Да',
          },
          {
            name: 'Боковые зеркала с повторителями указателей поворота',
            value: 'Да',
          },
          {
            name: 'Ручки дверей в цвет кузова',
            value: 'Да',
          },
          {
            name: 'Ручки дверей хромированные',
            value: 'Нет',
          },
          {
            name: 'Теплозащитное остекление',
            value: 'Да',
          },
          {
            name: 'Обогрев заднего стекла',
            value: 'Да',
          },
          {
            name: 'Заводская тонировка',
            value: 'Да',
          },
          {
            name: 'Бамперы',
            value: 'Нижняя решетка радиатора цвета чёрный металлик',
          },
          {
            name: 'Окраска кузова металлик',
            value: 'extraoption',
          },
        ],
      },
      {
        name: 'Внутреннее оснащение',
        params: [
          {
            name: 'Цветной многофункциональный дисплей',
            value: 'Да',
          },
          {
            name: 'Кожаная оплетка рулевого колеса',
            value: 'Нет',
          },
          {
            name: 'Вертикальная регулировка руля',
            value: 'Да',
          },
          {
            name: 'Регулируемая рулевая колонка',
            value: 'Да',
          },
          {
            name: 'Управление аудиосистемой на руле',
            value: 'Да',
          },
          {
            name: 'Кнопка запуска двигателя',
            value: 'Да',
          },
          {
            name: 'Телескопическая регулировка руля',
            value: 'Да',
          },
          {
            name: 'Регулировка передних сидений',
            value: 'Сиденье водителя с регулировкой в 6 направлениях',
          },
          {
            name: 'Второй ряд сидений',
            value: 'складывается в соотношении 60/40',
          },
          {
            name: 'Поясничная опора в передних сиденьях',
            value: 'Нет',
          },
          {
            name: 'Разделительный подлокотник спереди',
            value: 'Да',
          },
          {
            name: 'Разделительный подлокотник сзади',
            value: 'Да',
          },
          {
            name: 'Карманы на спинках передних сидений',
            value: 'Да',
          },
          {
            name: 'Вентиляция передних сидений',
            value: 'Нет',
          },
          {
            name: 'Тканевая обивка салона',
            value: 'Да',
          },
          {
            name: 'Кожаная обивка салона',
            value: 'Нет',
          },
          {
            name: 'Отделка салона "под дерево"',
            value: 'Нет',
          },
          {
            name: 'Электроподогрев передних сидений',
            value: 'Да',
          },
          {
            name: 'Центральный замок',
            value: 'Да',
          },
          {
            name: 'Окраска кузова металлик',
            value: 'Да',
          },
          {
            name: 'Электрические стеклоподъемники передние',
            value: 'Да',
          },
          {
            name: 'Электрические стеклоподъемники задние',
            value: 'Да',
          },
          {
            name: 'Электропривод передних сидений',
            value: 'Нет',
          },
          {
            name: 'Память расположения сиденья',
            value: 'Нет',
          },
          {
            name: 'Бесключевой доступ',
            value: 'Нет',
          },
          {
            name: 'Электроподогрев лобового стекла',
            value: 'Да',
          },
          {
            name: 'Обогрев форсунок стеклоомывателя',
            value: 'Нет',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    image: EmgrandNew,
    name: 'Emgrand New',
    bodyLength: 4638,
    bodyWidth: 1822,
    bodyHeight: 1460,
    wheelbase: 2650,
    clearance: 122,
    details: [
      {
        name: 'Основные параметры',
        params: [
          {
            name: 'Тип привода',
            value: 'Передний',
          },
          {
            name: 'Тип кузова',
            value: 'Седан',
          },
          {
            name: 'Тип трансмиссии',
            value: 'МКПП',
          },
          {
            name: 'Время разгона 0-100 км/ч, с',
            value: '10.9',
          },
          {
            name: 'Максимальная скорость, км/ч',
            value: '175',
          },
          {
            name: 'Клиренс (высота дорожного просвета), мм',
            value: '122',
          },
        ],
      },
      {
        name: 'Размеры',
        params: [
          {
            name: 'Число мест',
            value: '5',
          },
          {
            name: 'Ширина передней колеи, мм',
            value: '1549',
          },
          {
            name: 'Ширина задней колеи, мм',
            value: '1551',
          },
          {
            name: 'Масса, кг',
            value: '1185',
          },
          {
            name: 'Допустимая полная масса, кг',
            value: '1595',
          },
          {
            name: 'Объем багажника, л',
            value: '500',
          },
          {
            name: 'Объем топливного бака, л',
            value: '50',
          },
        ],
      },
      {
        name: 'Двигатель, коробка передач и рулевое управление',
        params: [
          {
            name: 'Максимальная мощность, л.с. (кВт) при об./мин',
            value: '103 л.с.',
          },
          {
            name: 'Тип двигателя',
            value: 'Рядный, 4-цилиндровый',
          },
          {
            name: 'Используемое топливо',
            value: 'Бензин АИ-92',
          },
          {
            name: 'Экологический тип двигателя',
            value: 'Евро V',
          },
          {
            name: 'Расход топлива в смешанном цикле, л/100 км',
            value: '6.5',
          },
          {
            name: 'Электроусилитель руля',
            value: 'Да',
          },
        ],
      },
      {
        name: 'Подвеска / Ходовая часть',
        params: [
          {
            name: 'Передние тормоза',
            value: 'Дисковые',
          },
          {
            name: 'Задние тормоза',
            value: 'Барабанные',
          },
          {
            name: 'Стояночный тормоз',
            value: 'Ручной',
          },
          {
            name: 'Размер шин',
            value: '195/65 R15',
          },
        ],
      },
      {
        name: 'Экстерьер и внешнее оснащение',
        params: [
          {
            name: 'Люк',
            value: 'Нет',
          },
          {
            name: 'Галогенные фары',
            value: 'Да',
          },
          {
            name: 'Светодиодные фары',
            value: 'Нет',
          },
          {
            name: 'Cветодиодные задние фонари',
            value: 'Да',
          },
          {
            name: 'Электропривод боковых зеркал',
            value: 'Да',
          },
          {
            name: 'Боковые зеркала с повторителями указателей поворота',
            value: 'Да',
          },
          {
            name: 'Ручки дверей в цвет кузова',
            value: 'Да',
          },
        ],
      },
      {
        name: 'Внутреннее оснащение',
        params: [
          {
            name: 'Кожаная оплетка рулевого колеса',
            value: 'Нет',
          },
          {
            name: 'Регулируемая рулевая колонка',
            value: 'По высоте',
          },
          {
            name: 'Регулировка передних сидений',
            value: '4-позиционная ручная регулировка',
          },
          {
            name: 'Подголовники',
            value: '5',
          },
          {
            name: 'Тканевая обивка салона',
            value: 'Да',
          },
          {
            name: 'Кожаная обивка салона',
            value: 'Нет',
          },
          {
            name: 'Центральный замок',
            value: 'Да',
          },
          {
            name: 'Электрические стеклоподъемники передние',
            value: 'Да',
          },
          {
            name: 'Электрические стеклоподъемники задние',
            value: 'Да',
          },
          {
            name: 'Бесключевой доступ',
            value: 'Нет',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    image: tank300,
    name: 'Tank 300',
    bodyLength: 4760,
    bodyWidth: 1930,
    bodyHeight: 1903,
    wheelbase: 2750,
    clearance: 224,
    details: [
      {
        name: 'Основные параметры',
        params: [
          {
            name: 'Период выпуска',
            value: '2023 -',
          },
          {
            name: 'Тип привода',
            value: 'Полный (4WD)',
          },
          {
            name: 'Тип кузова',
            value: 'SUV',
          },
          {
            name: 'Тип трансмиссии',
            value: 'АКПП 8',
          },
          {
            name: 'Объем двигателя, куб.см',
            value: '1967',
          },
          {
            name: 'Максимальная скорость, км/ч',
            value: '175',
          },
          {
            name: 'Число дверей',
            value: '5',
          },
          {
            name: 'Рекомендованная цена новой машины, руб',
            value: '3 699 000',
          },
          {
            name: 'Клиренс (высота дорожного просвета), мм',
            value: '224',
          },
          {
            name: 'Страна сборки',
            value: 'Китай',
          },
          {
            name: 'Гарантия производителя',
            value: '5 лет или 150 000 км пробега',
          },
        ],
      },
      {
        name: 'Размеры',
        params: [
          {
            name: 'Число мест',
            value: '5',
          },
          {
            name: 'Количество рядов сидений',
            value: '2',
          },
          {
            name: 'Колесная база, мм',
            value: '2750',
          },
          {
            name: 'Ширина передней колеи, мм',
            value: '1608',
          },
          {
            name: 'Ширина задней колеи, мм',
            value: '1608',
          },
          {
            name: 'Масса, кг',
            value: '2230',
          },
          {
            name: 'Допустимая полная масса, кг',
            value: '2552',
          },
          {
            name: 'Объем багажника, л',
            value: '410 (1635)',
          },
          {
            name: 'Объем топливного бака, л',
            value: '80',
          },
        ],
      },
      {
        name: 'Двигатель, коробка передач и рулевое управление',
        params: [
          {
            name: 'Максимальная мощность, л.с. (кВт) при об./мин',
            value: '220 л.с.',
          },
          {
            name: 'Максимальный крутящий момент, Н*м (кг*м) при об./мин',
            value: '380 (39) / 3600',
          },
          {
            name: 'Тип двигателя',
            value: 'Рядный, 4-цилиндровый',
          },
          {
            name: 'Используемое топливо',
            value: 'Бензин АИ-92',
          },
          {
            name: 'Нагнетатель',
            value: 'Да',
          },
          {
            name: 'Количество клапанов на цилиндр',
            value: '4',
          },
          {
            name: 'Удельная мощность, кг/л.с.',
            value: '10.40',
          },
          {
            name: 'Марка двигателя',
            value: 'E20CB',
          },
          {
            name: 'Степень сжатия',
            value: '9.6',
          },
          {
            name: 'Диаметр цилиндра, мм',
            value: '82.5',
          },
          {
            name: 'Ход поршня, мм',
            value: '92',
          },
          {
            name: 'Привод клапанов',
            value: 'extraoption',
          },
          {
            name: 'Поддержка ручного переключения передач',
            value: 'Да',
          },
          {
            name: 'Электроусилитель руля',
            value: 'Да',
          },
          {
            name: 'Гидроусилитель руля',
            value: 'Нет',
          },
        ],
      },
      {
        name: 'Подвеска / Ходовая часть',
        params: [
          {
            name: 'Передняя подвеска',
            value: 'Независимая, на двойных поперечных рычагах',
          },
          {
            name: 'Задняя подвеска',
            value: 'Независимая, многорычажная',
          },
          {
            name: 'Передний стабилизатор',
            value: 'Да',
          },
          {
            name: 'Задний стабилизатор',
            value: 'Да',
          },
          {
            name: 'Блокировка центрального дифференциала',
            value: 'Нет',
          },
          {
            name: 'Алюминиевые колесные диски',
            value: 'Да',
          },
          {
            name: 'Размер дисков',
            value: '17"',
          },
          {
            name: 'Передние тормоза',
            value: 'Дисковые вентилируемые',
          },
          {
            name: 'Задние тормоза',
            value: 'Дисковые вентилируемые',
          },
          {
            name: 'Стояночный тормоз',
            value: 'Электронный',
          },
          {
            name: 'Передние колеса',
            value: '265/65 R17',
          },
          {
            name: 'Задние колеса',
            value: '265/65 R17',
          },
        ],
      },
      {
        name: 'Экстерьер и внешнее оснащение',
        params: [
          {
            name: 'Регулируемый люк',
            value: 'Да',
          },
          {
            name: 'Передние противотуманные фары',
            value: 'Да',
          },
          {
            name: 'Датчик света',
            value: 'Да',
          },
          {
            name: 'Светодиодные противотуманные фары',
            value: 'Да',
          },
          {
            name: 'Светодиодные фары',
            value: 'Да',
          },
          {
            name: 'Cветодиодные задние фонари',
            value: 'Да',
          },
          {
            name: 'Светодиодные ходовые огни',
            value: 'Да',
          },
          {
            name: 'Ксеноновые фары',
            value: 'Нет',
          },
          {
            name: 'Электроподогрев зеркал',
            value: 'Да',
          },
          {
            name: 'Электропривод боковых зеркал',
            value: 'Да',
          },
          {
            name: 'Обогрев заднего стекла',
            value: 'Да',
          },
          {
            name: 'Заводская тонировка',
            value: 'Нет',
          },
          {
            name: 'Рейлинги',
            value: 'Да',
          },
          {
            name: 'Обогрев заднего стекла',
            value: 'Да',
          },
          {
            name: 'Задний дворник',
            value: 'Да',
          },
          {
            name: 'Окраска кузова металлик',
            value: 'extraoption',
          },
        ],
      },
      {
        name: 'Внутреннее оснащение',
        params: [
          {
            name: 'Цветной многофункциональный дисплей',
            value: '12.3"',
          },
          {
            name: 'Кожаная оплетка рулевого колеса',
            value: 'Да',
          },
          {
            name: 'Вертикальная регулировка руля',
            value: 'Да',
          },
          {
            name: 'Регулируемая рулевая колонка',
            value: 'Да',
          },
          {
            name: 'Управление аудиосистемой на руле',
            value: 'Да',
          },
          {
            name: 'Кнопка запуска двигателя',
            value: 'Да',
          },
          {
            name: 'Телескопическая регулировка руля',
            value: 'Да',
          },
          {
            name: 'Регулировка передних сидений',
            value: 'регулировка водительского сиденья в 6 направлениях, пассажирского - в 4 направлениях',
          },
          {
            name: 'Второй ряд сидений',
            value: 'складывается в соотношении 60/40',
          },
          {
            name: 'Поясничная опора в передних сиденьях',
            value: 'Да',
          },
          {
            name: 'Разделительный подлокотник спереди',
            value: 'Да',
          },
          {
            name: 'Разделительный подлокотник сзади',
            value: 'Да',
          },
          {
            name: 'Карманы на спинках передних сидений',
            value: 'Да',
          },
          {
            name: 'Вентиляция передних сидений',
            value: 'Нет',
          },
          {
            name: 'Кожаная обивка салона',
            value: 'Да',
          },
          {
            name: 'Декоративная отделка',
            value: 'Интерьер черного цвета',
          },
          {
            name: 'Электроподогрев передних сидений',
            value: 'Да',
          },
          {
            name: 'Центральный замок',
            value: 'Да',
          },
          {
            name: 'Ключ ДУ (дистанционный ключ)',
            value: 'Да',
          },
          {
            name: 'Электрические стеклоподъемники передние',
            value: 'Да',
          },
          {
            name: 'Электрические стеклоподъемники задние',
            value: 'Да',
          },
          {
            name: 'Электропривод передних сидений',
            value: 'Да',
          },
          {
            name: 'Память расположения сиденья',
            value: 'Нет',
          },
          {
            name: 'Бесключевой доступ',
            value: 'Да',
          },
          {
            name: 'Электроподогрев лобового стекла',
            value: 'Да',
          },
          {
            name: 'Обогрев форсунок стеклоомывателя',
            value: 'Да',
          },
        ],
      },
    ],
  },
];