import { useState } from "react";

export default function useDenverRestakeHook() {
  const [state, setState] = useState({
    availableLp: null,
  });

  const actions = {
    setField: (fieldKey, value) => {
      if (isNaN(value)) return;
      updateState({ [fieldKey]: value });
    },
  };

  function updateState(object) {
    setState((previousState) => ({ ...previousState, ...object }));
  }

  return { state, actions };
}
