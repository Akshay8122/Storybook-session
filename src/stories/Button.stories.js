import Button from "../components/Button";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },

  //decorators are wrapper components of story

  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  // decorators: [withKnobs],
};
// write story with normal syntax
export const Green = () => <Button backgroundColor="green" label="Click me" />;

//write story with args
const Template = (args) => <Button {...args} />;

// export const Green = Template.bind({});
// Green.args = {
//   backgroundColor: "green",
//   size: "md",
//   label: "Click me!",
// };

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "#0060CE",
  size: "md",
  label: "Click me",
};

export const Success = Template.bind({});
Success.args = {
  backgroundColor: "#7CBB3F",
  size: "md",
  label: "Click me",
};

export const Warning = Template.bind({});
Warning.args = {
  backgroundColor: "#FF8E0D",
  size: "md",
  label: "Click me",
};

export const Danger = Template.bind({});
Danger.args = {
  backgroundColor: "#FF3232",
  size: "md",
  label: "Click me",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "gray",
  size: "lg",
  label: "Primary button",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "green",
  size: "md",
  label: "Primary button",
};

// Link addon usage
export const ButtonwithLink = () => (
  <Button
    backgroundColor="#2e0f27"
    label="Go to danger"
    size="lg"
    handleClick={linkTo("Components/Button", "Danger")}
  />
);

//Knobs addon usage
export const ButtonWithKnobs = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);
