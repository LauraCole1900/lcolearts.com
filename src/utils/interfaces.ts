export interface Project {
  id: number;
  name: string;
  image: string;
  subtitle: string;
  description: string;
  tech: string;
  deployed: string;
  deploy_button_label: string;
  repo: string;
}

export interface Game {
  id: number;
  name: string;
  image: string;
  description: string;
  deployed: string;
  deploy_button_label: string;
}