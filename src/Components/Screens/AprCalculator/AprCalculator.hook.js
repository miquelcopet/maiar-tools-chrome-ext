import { useState, useEffect } from "react";

export default function useAprCalculatorHook() {
  const green = "#5BE4A5";
  const yellow = "#FDDC58";
  const red = "#FE9085";

  const [state, setState] = useState({
    balance: 1000,
    aprMex: 1314,
    aprEgld: 4425,
    aprUsd: 3754,
    mexColor: null,
    egldColor: null,
    usdColor: null,
  });

  useEffect(() => {
    const aprMex = actions.getMinuteDollar(state.aprMex);
    const aprEgld = actions.getMinuteDollar(state.aprEgld);
    const aprUsd = actions.getMinuteDollar(state.aprUsd);

    if (aprMex >= aprEgld && aprMex >= aprUsd) {
      updateState({
        mexColor: green,
        egldColor: aprEgld > aprUsd ? yellow : red,
        usdColor: aprUsd > aprEgld ? yellow : red,
      });
    } else if (aprEgld >= aprMex && aprEgld >= aprUsd) {
      updateState({
        egldColor: green,
        mexColor: aprMex > aprUsd ? yellow : red,
        usdColor: aprUsd > aprMex ? yellow : red,
      });
    } else {
      updateState({
        usdColor: green,
        mexColor: aprMex > aprEgld ? yellow : red,
        egldColor: aprEgld > aprMex ? yellow : red,
      });
    }
  }, [state.aprMex, state.aprEgld, state.aprUsd]);

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
