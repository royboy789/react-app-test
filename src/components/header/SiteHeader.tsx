import React, { useRef } from "react";


export interface HeaderProps {
  changeSubreddit: (newValue: string) => void
}

/**
 * Header Component
 * 
 * 
 * @param props 
 */
const Header = (props: HeaderProps) => {
  const { changeSubreddit } = props;
  const redditRef = useRef<HTMLInputElement>(null);
  
  /**
   * Return if there is a value in the input
   */
  function getValue() : boolean | string {
    if ( ! redditRef.current || ! redditRef.current.value ) {
      return false;
    }
    return redditRef.current.value;
  }

  /**
   * Calls changeSubCallback after sanitization / validation
   * 
   * @param event
   */
  function sanitize_input(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void {
    const inputString = getValue();
    if(inputString) {
      changeSubreddit(inputString as string);
    }
  };

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
        <input ref={redditRef} id={'subreddit-change-input'} onChange={() => {}}/>
        <button
          id={'change-subreddit-submit'}
          data-testid={'change-subreddit-submit'}
          type={"submit"}
          onClick={sanitize_input}
        >
          Switch subreddit
        </button>
      </form>
    </header>
  );
};

export default Header;
