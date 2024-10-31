import React from 'react';
import { CSSTransition } from 'primereact/csstransition';

function TransitionRoute({ children, inProp }) {
  return (
    <CSSTransition in={inProp} timeout={300} classNames="fade" unmountOnExit>
      {children}
    </CSSTransition>
  );
}

export default TransitionRoute;
