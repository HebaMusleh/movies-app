interface IData {
  id: number;
  title: string;
  year: number;
  runtime: number;
  actors: string;
  description: string;
  image: any;
  header: any;
  reviews: number;
}

interface ISlider {
  id: number;
  title: string;
  image: any;
  header: any;
  reviews: number;
  year: number;
  description: string;
}

interface ITab {
  key: string;
  title: string;
  content: React.ReactNode;
}

export { ITab, IData, ISlider };
