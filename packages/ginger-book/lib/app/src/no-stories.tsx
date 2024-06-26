import { config } from "virtual:generated-list";
import { Code, Link } from "./ui";

const NoStories = () => (
  <div className="ginger-book-error-content">
    <h1>No stories found</h1>
    <p>
      The configured glob pattern for stories is: <Code>{config.stories}</Code>.
    </p>
    <p>
      It can be changed through the{" "}
      <Link href="https://gingersociety.org/ginger-book/docs/config#story-filenames">
        configuration file
      </Link>{" "}
      or CLI flag <Code>--stories=your-glob</Code>.
    </p>
    <p>
      <Link href="https://github.com/ginger-society/ginger-book">GitHub</Link>
    </p>
    <p>
      <Link href="https://gingersociety.org/ginger-book">Docs</Link>
    </p>
  </div>
);

export default NoStories;
