import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};
