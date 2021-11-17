import { useState } from "react";

export default function useAprCalculatorHook() {
  const [state, setState] = useState({
    balance: 1000,
    aprMex: 1314,
    aprEgld: 4425,
    aprUsd: 3754,
  });

  const actions = {
    getHourApr: (apr) => {
      return apr / (365 * 24);
    },

    getMinuteApr: (apr) => {
      return actions.getHourApr(apr) / 60;
    },

    getMinuteDollar: (apr) => {
      return (actions.getMinuteApr(apr) * state.balance) / 100;
    },

    getHourDollar: (apr) => {
      return actions.getMinuteDollar(apr) * 60;
    },

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
