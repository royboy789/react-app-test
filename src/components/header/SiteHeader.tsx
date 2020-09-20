import React, { useRef } from "react";


export interface HeaderProps {
  changeSubCallback: Function
}

const Header = (props: HeaderProps) => {
  const { changeSubCallback } = props;
  const redditRef = useRef<HTMLInputElement>(null);

  return (
    <header id={"site-header"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor={'subreddit-change-input'}>
          Change Subreddit:
        </label>
        <input ref={redditRef} id={'subreddit-change-input'}/>
        <button
          id={'change-subreddit-submit'}
          data-testid={'change-subreddit-submit'}
          type={"submit"}
          onClick={() => {
            changeSubCallback(redditRef?.current?.value);
          }}
        >
          Switch subreddit
        </button>
      </form>
    </header>
  );
};

export default Header;
