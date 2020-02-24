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
  url: string;
  detail_set: Detail[];
}

export interface Detail {
  url: string;
  item: Item;
  state: string;
}

export interface Item {
  url: string;
  name: string;
  price: string;
}
