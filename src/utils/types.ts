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
  tableTitle: string;
  imgSRC: string;
  id: number;
  cardSelected: number | undefined;
  setCardSelected: Function;
  pageMode: modes.listingMode | modes.editMode
  props: Object;
}

export interface IAddRow {
  title: string;
  data: Data;
  toAdd: boolean;
  setToAdd: Function; 
  cardSelected: Function;
}

export interface IRowCardSection {
  cardSelected: number | undefined;
  setCardSelected: Function;
  pageMode: modes.listingMode | modes.editMode;
}

export interface INavButtons {
  pageMode: modes;
  setPageMode: Function;
  cardSelected: number | undefined;
  setToAdd: Function;
  setToDelete: Function;
}

export interface IDeleteRow {
  toDelete: boolean;
  setToDelete: Function
  deleteFunction?: Function;
  cardID: number | undefined;
  cardSelected: Function;
}

export enum enumVehicles {
  name = 'name',
  doors = 'doors',
  minHP = 'minHP',
  maxHP = 'maxHP',
}

export enum enumCountries {
  name = 'name',
  acronym = 'acronym',
  mortalityRate = 'mortalityRate',
}