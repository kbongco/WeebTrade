import { ButtonStyle, InputStyle } from "../enums/component-enums";
import FigureTypesInterface from "./figure-type-interface";

export default interface HeroComponent {
  title: string;
  imageSrc: string;
  description: string;
  buttonLabels?: string[];
}

export default interface CardComponent {
  cardTitle: string;
  input?: any;
  icons?: any;
  button?: any;
  buttonsGroup?: string;
}

export default interface ButtonComponent {
  label: string;
  color: string;
  size: string;
  type?: string;
  onClick?: any;
}

export default interface InputComponent {
  label: string;
  value: string;
  onChange: () => void;
  styles?: InputStyle;
}

export default interface BreadCrumbsComponent {
  routes: {
    label: string;
    path: string;
  }
}

export default interface AccordionComponent {
  title: string;
  content?: string;
}

export default interface ProductCardComponent {
  imgLink: string;
  name: string;
  typeName?: string;
  itemType?: string;
  itemTypes: FigureTypesInterface[];
  baseUrl: string;
}

export default interface RadioButtonComponent {
  label: string;
}

export default interface Modalcomponent {
  isOpen: boolean;
  modalTitle: string;
  modalBody: React.ReactNode;
  onClose: () => void;
  footerContent?: any;
}

export default interface Options {
  label: string;
  value: string;
}

export interface SelectComponent {
  label: string;
  options: any;
}

export interface Pagination {
  totalNumber: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  lastPage: number;
}