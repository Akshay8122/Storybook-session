import Stack from "../components/Stack";

export default {
  title: "Stack/Stack",
  component: Stack,
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          height: "50px",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // color: "white",            //enable for testing (check A11y addon)
          backgroundColor: "red",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  spacing: 2,
  numberOfChildren: 4,
  direction: "row",
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  spacing: 2,
  numberOfChildren: 4,
  direction: "column",
  wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  numberOfChildren: 4,
  spacing: 0,
  direction: "row",
  wrap: false,
};

export const WrapOverFlow = Template.bind({});
WrapOverFlow.args = {
  numberOfChildren: 40,
  spacing: 2,
  direction: "row",
  wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
  spacing: 2,
  direction: "row",
  wrap: false,
};
