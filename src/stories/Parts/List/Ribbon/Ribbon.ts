import '@/Parts/List/Ribbon/ribbon.scss';

export interface RibbonProps {
  template: string;
}

export const createRibbon = ({ template }: RibbonProps): string => {
  return template;
};
