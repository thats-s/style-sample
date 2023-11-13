import articleLayoutTemplate from '@/Layout/Grid/article-layout.html?raw';
import cardLayoutTemplate from '@/Layout/Grid/card-layout.html?raw';
import multiColumnTemplate from '@/Layout/Grid/multi-column.html?raw';

import type { Meta, StoryObj } from '@storybook/html';

import type { LayoutGridProps } from './Grid';
import { createLayoutGrid } from './Grid';

const meta = {
  title: 'Layout/Grid',
  render: (args) => {
    return createLayoutGrid(args);
  },
} satisfies Meta<LayoutGridProps>;

export default meta;
type Story = StoryObj<LayoutGridProps>;

export const ArticleLayout: Story = {
  args: {
    template: articleLayoutTemplate,
  },
};

export const MultiColumn: Story = {
  args: {
    template: multiColumnTemplate,
  },
};

export const CardLayout: Story = {
  args: {
    template: cardLayoutTemplate,
  },
};
