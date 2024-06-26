import type { StoryDefault, Story } from "@ginger-society/ginger-book";

type Props = { label: string };

export default {
  decorators: [
    (Component, context) => {
      console.log("first", context);
      return (
        <div style={{ border: "5px solid red" }}>
          <p>first {context.globalState.control.label.value}</p>
          <Component label={context.globalState.control.label.value} />
        </div>
      );
    },
    (Component, context) => {
      console.log("second", context);
      return (
        <div style={{ border: "5px solid blue" }}>
          <p>second {context.globalState.control.label.value}</p>
          <Component label={context.globalState.control.label.value} />
        </div>
      );
    },
    (Component, context) => {
      console.log("third", context);
      return (
        <div style={{ border: "5px solid green" }}>
          <p>third {context.globalState.control.label.value}</p>
          <Component label={context.globalState.control.label.value} />
        </div>
      );
    },
  ],
} satisfies StoryDefault<Props>;

const Card: Story<Props> = ({ label }) => (
  <>
    <p>Label: {label}</p>
    <input id="persist-input" />
  </>
);

export const CardHello = Card.bind({});

CardHello.decorators = [
  (Component, context) => {
    console.log("private", context);
    return (
      <div style={{ border: "5px solid pink" }}>
        <p>private {context.globalState.control.label.value}</p>
        <Component label={context.globalState.control.label.value} />
      </div>
    );
  },
];

CardHello.args = {
  label: "Hello",
};
