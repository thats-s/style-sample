import '@/Layout/Center/center.scss';

import ejs from 'ejs';

export interface LayoutCenterProps {
  template: string;

  /**
   * クラス名
   */
  className: string;

  /**
   * 中央揃えにするコンテンツの数
   */
  counter: number;
}

export const createLayoutCenter = ({
  template,
  className,
  counter,
}: LayoutCenterProps): string => {
  return ejs.render(template, { className, counter });
};
