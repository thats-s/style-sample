import '@/Technique/Content/content.scss';

export interface ContentProps {
  template: string;
}

export const createContent = ({ template }: ContentProps): string => {
  return template;
};
