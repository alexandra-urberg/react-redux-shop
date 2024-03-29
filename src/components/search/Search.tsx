import React, { useCallback } from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/filter/slice";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 600),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <label className="search-label">
        <svg
          className="search-icon"
          enableBackground="new 0 0 32 32"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14"
            cy="14"
            fill="none"
            id="XMLID_42_"
            r="9"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            fill="none"
            id="XMLID_44_"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"
          />
        </svg>
        <input
          ref={inputRef}
          value={value}
          className="search-input"
          placeholder="Search for"
          type="text"
          onChange={onChangeInput}
        />
        {value && (
          <svg
            onClick={onClickClear}
            className="search-clearIcon"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        )}
      </label>
    </div>
  );
};

export default Search;
