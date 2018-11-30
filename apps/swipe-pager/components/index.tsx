import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Pagenate from '../../components/pagenate'
import PageSwiper from './pageSwiper'
import Pages from './pages'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className={props.className}>
      <PageSwiper
        pages={Pages}
        threshold={100}
        animationDuration={200}
        onChangePage={setCurrent}
      />
      <div className="pagenate">
        <Pagenate
          current={current}
          color="dark"
          count={Pages.length}
        />
      </div>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > .pagenate {
    width: 100%;
    height: 30px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
