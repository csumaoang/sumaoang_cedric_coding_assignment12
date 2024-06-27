import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a card component',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'This is a card component',
  disabled: true,
};
