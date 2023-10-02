import centerTemplate from '@/Layout/Center/center.ejs?raw';

import type { Meta, StoryObj } from '@storybook/html';

import type { LayoutCenterProps } from './Center';
import { createLayoutCenter } from './Center';

const meta = {
  title: 'Layout/Center',
  render: (args) => {
    return createLayoutCenter(args);
  },
  argTypes: {
    counter: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: '中央揃えにする要素の数',
    },
  },
} satisfies Meta<LayoutCenterProps>;

export default meta;
type Story = StoryObj<LayoutCenterProps>;

export const ContentCenter: Story = {
  args: {
    template: centerTemplate,
    className: 'content-center',
    counter: 1,
  },
};

export const GentleFlex: Story = {
  args: {
    template: centerTemplate,
    className: 'gentle-flex',
    counter: 1,
  },
};

export const Autobot: Story = {
  args: {
    template: centerTemplate,
    className: 'autobot',
    counter: 1,
  },
};

export const FluffyCenter: Story = {
  args: {
    template: centerTemplate,
    className: 'fluffy-center',
    counter: 1,
  },
};

export const PopPlop: Story = {
  args: {
    template: centerTemplate,
    className: 'pop-plop',
    counter: 1,
  },
};
