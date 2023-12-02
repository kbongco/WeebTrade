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
  style?: ButtonStyle;
}

export default interface InputComponent {
  label: string;
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