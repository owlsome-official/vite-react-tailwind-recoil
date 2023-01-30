import React, { useEffect } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { appLoadingState, counterState } from "utils/recoil/atoms";

const EasyButton = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  // another way to use recoil (by each purpose)
  const loading = useRecoilValue(appLoadingState);
  const setLoading = useSetRecoilState(appLoadingState);
  const resetLoading = useResetRecoilState(appLoadingState);

  const handleClickReset = () => {
    setCounter(0);
    resetLoading();
  };

  useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  }, [loading]);

  return (
    <div className="flex items-center justify-center gap-2 p-4">
      {loading ? (
        <div>Loading... for 3 seconds</div>
      ) : (
        <>
          <div>Count: {counter}</div>
          <button
            className="btn-outline btn-primary btn"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
          <button
            className="btn-outline btn-primary btn"
            onClick={() => setCounter(counter - 1)}
          >
            -
          </button>
          <button
            className="btn-outline btn-error btn"
            onClick={handleClickReset}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default EasyButton;
