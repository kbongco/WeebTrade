export default interface HeroComponent {
  title: string;
  imageSrc: string;
  description: string;
  buttonLabels?: string[];
}

export default interface CardComponent {
  cardTitle: string;
  input1: string;
  input2?: string;
  icon1?: string;
  icon2?: string;
  button: any;
}

export default interface ButtonComponent {
  label: string;
}