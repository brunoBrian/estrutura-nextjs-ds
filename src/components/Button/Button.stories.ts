import { ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    outlined: {
      type: 'boolean'
    },
    radius: {
      options: ['default', 'full'],
      control: { type: 'radio' },
      defaultValue: 'default'
    },
    color: {
      options: ['primary', 'shape'],
      control: { type: 'radio' },
      defaultValue: 'primary'
    },
    size: {
      options: ['small', 'full'],
      control: { type: 'radio' },
      defaultValue: 'small'
    },
    css: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Button>;

export const Primary: ComponentMeta<typeof Button> = {
  args: {
    children: 'Some text button'
  }
};

export const Secondary: ComponentMeta<typeof Button> = {
  args: {
    ...Primary.args,
    color: 'shape'
  }
};

export const Full: ComponentMeta<typeof Button> = {
  args: {
    ...Primary.args,
    size: 'full'
  }
};

export const Radius: ComponentMeta<typeof Button> = {
  args: {
    ...Primary.args,
    radius: 'full'
  }
};

export const Outlined: ComponentMeta<typeof Button> = {
  args: {
    ...Primary.args,
    outlined: true
  }
};
