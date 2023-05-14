import { Meta, StoryObj } from "@storybook/react";

import PrevButton from "./PrevButton";

const meta: Meta<typeof PrevButton> = {
  component: PrevButton,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof PrevButton>;

export const Prev: Story = {
  args: {},
};
