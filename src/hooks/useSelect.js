import React, { useState } from "react";

export default function useSelect(initialState, options) {
  const [state, setState] = useState(initialState);

  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(event) => setState(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
}
