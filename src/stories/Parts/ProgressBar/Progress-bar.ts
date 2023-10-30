import '@/Parts/ProgressBar/progress-bar.scss';

export interface ProgressBarProps {
  template: string;
}

export const createProgressBar = ({ template }: ProgressBarProps): string => {
  return template;
};
