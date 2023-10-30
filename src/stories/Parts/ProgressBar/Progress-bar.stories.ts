import type { Meta, StoryObj } from '@storybook/html';

import type { ProgressBarProps } from './Progress-bar';
import { createProgressBar } from './Progress-bar';

const meta = {
  title: 'Parts/ProgressBar',
  render: (args) => {
    return createProgressBar(args);
  },
} satisfies Meta<ProgressBarProps>;

export default meta;
type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
  args: {
    template: `
<ol class="progress-bar">
  <li class="is-active"><span>Objective & Template</span></li>
  <li><span>Options</span></li>
  <li><span>Step</span></li>
  <li><span>In a Nutshell</span></li>
  <li><span>Step</span></li>
  <li><span>Step</span></li>
  <li><span>Launch Date</span></li>
  <li><span>Step</span></li>
  <li><span>Step</span></li>
  <li><span>Agreement</span></li>
</ol>
    `,
  },
};

export const Step02: Story = {
  args: {
    template: `
<ol class="progress-bar">
  <li class="is-complete"><span>Objective & Template</span></li>
  <li class="is-active"><span>Options</span></li>
  <li><span>Step</span></li>
  <li><span>In a Nutshell</span></li>
  <li><span>Step</span></li>
  <li><span>Step</span></li>
  <li><span>Launch Date</span></li>
  <li><span>Step</span></li>
  <li><span>Step</span></li>
  <li><span>Agreement</span></li>
</ol>
    `,
  },
};

export const MultipleStepsComplete: Story = {
  args: {
    template: `
<ol class="progress-bar">
  <li class="is-complete"><span>Objective &amp; Template</span></li>
  <li class="is-complete"><span>Options</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>In a Nutshell</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-active"><span>Launch Date</span></li>
  <li><span>Step</span></li>
  <li><span>Step</span></li>
  <li><span>Agreement</span></li>
</ol>
    `,
  },
};

export const Hover: Story = {
  args: {
    template: `
<ol class="progress-bar">
  <li class="is-complete"><span>Objective &amp; Template</span></li>
  <li class="is-complete"><span>Options</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete is-hovered"><span>In a Nutshell</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>Launch Date</span></li>
  <li><span>Step</span></li>
  <li><span>Step</span></li>
  <li><span>Agreement</span></li>
</ol>
    `,
  },
};

export const LastStep: Story = {
  args: {
    template: `
<ol class="progress-bar">
  <li class="is-complete"><span>Objective &amp; Template</span></li>
  <li class="is-complete"><span>Options</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>In a Nutshell</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>Launch Date</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-complete"><span>Step</span></li>
  <li class="is-active"><span>Agreement</span></li>
</ol>
    `,
  },
};
