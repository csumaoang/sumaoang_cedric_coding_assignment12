import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};
