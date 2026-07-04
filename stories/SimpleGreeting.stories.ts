import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../lib/components/Button/index.js'; // Import custom element

const meta = {
  title: 'Components/SimpleGreeting',
  tags: ['autodocs'],
  render: (args) => html`<simple-greeting .text=${args.text}></simple-greeting>`,
  args: {
    text: 'World',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    text: 'Antigravity',
  },
};
