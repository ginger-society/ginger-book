import { Code, Link } from "./ui";

const StoryNotFound = ({ activeStory }: { activeStory: string }) => (
  <div className="ginger-book-error-content">
    <h1>Story not found</h1>
    <p>
      The story id <Code>{activeStory}</Code> you are trying to open does not
      exist. Typo?
    </p>
    <p>
      <Link href="/">Back to home</Link>
    </p>
    <p>
      <Link href="https://github.com/ginger-society/ginger-book">GitHub</Link>
    </p>
    <p>
      <Link href="https://gingersociety.org/ginger-book">Docs</Link>
    </p>
  </div>
);

export default StoryNotFound;
