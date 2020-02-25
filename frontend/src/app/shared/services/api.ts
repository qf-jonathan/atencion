export interface NavTab {
  id: number;
  name: string;
  type: string;
}

export interface Area {
  name: string;
  table_set: Table[];
}

export interface Table {
  url: string;
  label: string;
  invoice_set: Invoice[];
}

export interface Invoice {
  url?: string;
  id?: number;
  table: string;
  detail_set: Detail[];
  state: number;
}

export interface Detail {
  url?: string;
  id?: number;
  item: Item;
  state?: string;
}

export interface Item {
  url: string;
  id: number;
  name: string;
  image: string;
  price: string;
}

export interface Category {
  name: string;
  item_set: Item[];
}
