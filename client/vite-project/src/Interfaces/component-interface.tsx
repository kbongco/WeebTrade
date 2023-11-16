import { ButtonStyle } from "../enums/component-enums";

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
  style: ButtonStyle;
}