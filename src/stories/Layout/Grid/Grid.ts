import '@/Layout/Grid/grid.scss';

export interface LayoutGridProps {
  template: string;
}

export const createLayoutGrid = ({ template }: LayoutGridProps): string => {
  return template;
};
