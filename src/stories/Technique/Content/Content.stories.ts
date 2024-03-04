import basedListTodoTemplate from '@/Technique/Content/based-list-todo.html?raw';
import basedNavigationTemplate from '@/Technique/Content/based-navigation.html?raw';
import basedSectionHeroTemplate from '@/Technique/Content/based-section-hero.html?raw';
import headingAndDescriptionTemplate from '@/Technique/Content/heading-and-description.html?raw';
import imagesAndCaptionsTemplate from '@/Technique/Content/images-and-captions.html?raw';
import titledSeparatorLineTemplate from '@/Technique/Content/titled-separator-line.html?raw';
import underlinedTitleTemplate from '@/Technique/Content/underlined-title.html?raw';

import type { Meta, StoryObj } from '@storybook/html';

import type { ContentProps } from './Content';
import { createContent } from './Content';

const meta = {
  title: 'Technique/Content',
  render: (args) => {
    return createContent(args);
  },
} satisfies Meta<ContentProps>;

export default meta;
type Story = StoryObj<ContentProps>;

export const MinContent: Story = {
  args: {
    template:
      '<h2 class="t-content t-content-min">A title for an awesome article</h2>',
  },
};

export const MaxContent: Story = {
  args: {
    template:
      '<h2 class="t-content t-content-max">A title for an awesome article</h2>',
  },
};

export const FitContent: Story = {
  args: {
    template:
      '<h2 class="t-content t-content-fit">A title for an awesome article</h2>',
  },
};

export const ImagesAndCaptions: Story = {
  args: {
    template: imagesAndCaptionsTemplate,
  },
};

export const TitledSeparatorLine: Story = {
  args: {
    template: titledSeparatorLineTemplate,
  },
};

export const UnderlinedTitle: Story = {
  args: {
    template: underlinedTitleTemplate,
  },
};

export const BasedNavigation: Story = {
  args: {
    template: basedNavigationTemplate,
  },
};

export const BasedListTodo: Story = {
  args: {
    template: basedListTodoTemplate,
  },
};

export const BasedSectionHero: Story = {
  args: {
    template: basedSectionHeroTemplate,
  },
};

export const HeadingAndDescription: Story = {
  args: {
    template: headingAndDescriptionTemplate,
  },
};
