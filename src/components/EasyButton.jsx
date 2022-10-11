import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { appLoadingState, counterState } from "utils/recoil/atoms"

const EasyButton = () => {
  const [counter, setCounter] = useRecoilState(counterState)
  // another way to use recoil (by each purpose)
  const loading = useRecoilValue(appLoadingState)
  const setLoading = useSetRecoilState(appLoadingState)
  const resetLoading = useResetRecoilState(appLoadingState)

  const handleClickReset = () => {
    setCounter(0)
    resetLoading()
  }

  useEffect(() => {
    loading && setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [loading])

  return (
    <div className="p-4 flex gap-2 justify-center items-center">
      {
        loading ?
          <div>Loading for 3 seconds</div>
          :
          <>
            <div>Count: {counter}</div>
            <button className="btn btn-primary btn-outline" onClick={() => setCounter(counter + 1)}>+</button>
            <button className="btn btn-primary btn-outline" onClick={() => setCounter(counter - 1)}>-</button>
            <button className="btn btn-error btn-outline" onClick={handleClickReset}>Reset</button>
          </>
      }
    </div>
  )
}

export default EasyButton