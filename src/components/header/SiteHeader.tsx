import React, { useRef } from "react";


export interface HeaderProps {
  changeSubCallback: (newValue: string) => void
}

/**
 * Header Component
 * 
 * 
 * @param props 
 */
const Header = (props: HeaderProps) => {
  const { changeSubCallback } = props;
  const redditRef = useRef<HTMLInputElement>(null);
  
  /**
   * Return if there is a value in the input
   */
  function isValueSet() : boolean {
    if ( ! redditRef.current || ! redditRef.current.value ) {
      return false;
    }
    return true;
  }

  /**
   * Calls changeSubCallback after sanitization / validation
   * 
   * @param inputString 
   */
  function sanitize_input(inputString: string|undefined) : void {
    if(isValueSet()) {
      changeSubCallback(inputString as string);
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
          onClick={() => {
            sanitize_input(redditRef?.current?.value);
          }}
        >
          Switch subreddit
        </button>
      </form>
    </header>
  );
};

export default Header;
