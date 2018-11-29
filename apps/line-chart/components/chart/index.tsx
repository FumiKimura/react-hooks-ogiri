import * as React from 'react'
import { useContext, useMemo, MouseEvent } from 'react'
import { LineChartContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  width: number
  height: number
  onMouseLeave: (event: MouseEvent) => void
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <svg
    viewBox={`0 0 ${props.width} ${props.height}`}
    width={props.width}
    height={props.height}
    onMouseLeave={props.onMouseLeave}
  >
    {props.children}
  </svg>
)
// ______________________________________________________
//
// @ Container

export default (props: { children?: React.ReactNode }) => {
  const { svgRect, handleLeaveHitarea } = useContext(
    LineChartContext
  )
  return useMemo(
    () => (
      <View
        width={svgRect.width}
        height={svgRect.height}
        onMouseLeave={handleLeaveHitarea}
      >
        {props.children}
      </View>
    ),
    [svgRect, handleLeaveHitarea]
  )
}