import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
        name: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'example',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'example',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  disabled: true,
};
