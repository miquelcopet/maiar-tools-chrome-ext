import { useState } from "react";

export default function useBootWithdrawHook() {
  const [state, setState] = useState({
    earnedMex: null,
    stakedLpDollar: null,
    stakedLp: null,
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
