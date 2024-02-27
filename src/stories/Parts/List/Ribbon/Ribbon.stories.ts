import alphaTemplate from '@/Parts/List/Ribbon/ribbon-alpha.html?raw';
import betaTemplate from '@/Parts/List/Ribbon/ribbon-beta.html?raw';
import bigTemplate from '@/Parts/List/Ribbon/ribbon-big.html?raw';
import deltaTemplate from '@/Parts/List/Ribbon/ribbon-delta.html?raw';
import gammaTemplate from '@/Parts/List/Ribbon/ribbon-gamma.html?raw';
import gradientTemplate from '@/Parts/List/Ribbon/ribbon-gradient.html?raw';
import shadowTemplate from '@/Parts/List/Ribbon/ribbon-shadow.html?raw';
import smallTemplate from '@/Parts/List/Ribbon/ribbon-small.html?raw';

import type { Meta, StoryObj } from '@storybook/html';

import type { RibbonProps } from './Ribbon';
import { createRibbon } from './Ribbon';

const meta = {
  title: 'Parts/List/Ribbon',
  render: (args) => {
    return createRibbon(args);
  },
} satisfies Meta<RibbonProps>;

export default meta;
type Story = StoryObj<RibbonProps>;

export const Alpha: Story = {
  args: {
    template: alphaTemplate,
  },
};

export const Beta: Story = {
  args: {
    template: betaTemplate,
  },
};

export const Gamma: Story = {
  args: {
    template: gammaTemplate,
  },
};

export const Delta: Story = {
  args: {
    template: deltaTemplate,
  },
};

export const Shadow: Story = {
  args: {
    template: shadowTemplate,
  },
};

export const Gradient: Story = {
  args: {
    template: gradientTemplate,
  },
};

export const Small: Story = {
  args: {
    template: smallTemplate,
  },
};

export const Big: Story = {
  args: {
    template: bigTemplate,
  },
};
