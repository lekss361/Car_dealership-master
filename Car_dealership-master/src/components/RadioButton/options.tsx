export interface Option {
  value: string;
  label: string;
  id: number;
}

export const options = [
  { value: 'NEW_CARS', label: 'Новые авто', id: 1 },
  { value: 'OLD_CARS', label: 'С пробегом', id: 2 },
  { value: 'TAXIS', label: 'Такси', id: 3 },
];
