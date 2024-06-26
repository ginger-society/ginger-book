/* eslint-disable react/no-unescaped-entities */
import { Link } from "./ui";

const NoStoriesError = ({ error }: { error: string }) => {
  console.log(error);
  return (
    <div className="ginger-book-error-content">
      <h1>SyntaxError when parsing stories ❌</h1>
      <pre>{error}</pre>
      <p>Check the terminal for more info.</p>
      <p>
        <Link href="https://gingersociety.org/ginger-book/docs/stories#limitations">
          More information.
        </Link>
      </p>
      <p>
        <strong>Please restart GingerBook after fixing this issue.</strong>
      </p>
      <p>
        <Link href="https://github.com/ginger-society/ginger-book">Github</Link>
      </p>
      <p>
        <Link href="https://gingersociety.org/ginger-book">Docs</Link>
      </p>
    </div>
  );
};

export default NoStoriesError;
