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
  icons?: any;
  button: any;
}

export default interface ButtonComponent {
  label: string;
}