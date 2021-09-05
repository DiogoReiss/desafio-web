export interface ITableCard {
  title: string;
  imgSRC: string;
  setTable: Function;
  tableSelectedTitle: string;
}

export interface IButton {
  content: string;
  onclick?: Function;
  className?: string;
}

export interface IRouteParams {
  tableTitle: string
}

export enum modes {
  listingMode,
  editMode,
}

export interface ILayoutProps {
  children: React.ReactChild | React.ReactChild[];
  title: string;
}

export interface Data {
  countries: Array<countries>;
  vehicles: Array<vehicles>;
}

interface countries {
  id: number;
  name: string;
  acronym: string;
  mortalityRate: number;
}

interface vehicles {
  id: number;
  name: string;
  doors: number;
  minHP: number;
  maxHP: number;
}

export interface IRowCard {
  children: React.ReactElement | React.ReactElement[];
  tableTitle: string;
  imgSRC: string;
  id: number;
}

export interface IAddRow {
  title: string;
  imgSRC: string;
  data: Data;
}