import React, { useRef } from "react";

const Header = (attrs: any) => {
  const redditRef = useRef<HTMLInputElement>(null);

  return (
    <header id={"site-header"}>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <input ref={redditRef} />
        <button
          type={"submit"}
          onClick={() => {
            attrs.changeSubCallback(redditRef?.current?.value);
          }}
        >
          Switch subreddit
        </button>
      </form>
    </header>
  );
};

export default Header;
