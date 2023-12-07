//Knobs addon allow you to edit prop dynamically using storybook UI
// you change look & feel of component using this addon
import { text, number } from "@storybook/addon-knobs";

export default {
  title: "Dynamic/Variable",
};

export const DynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
