import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label Text',
};
