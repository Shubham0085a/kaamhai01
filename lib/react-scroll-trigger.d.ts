declare module 'react-scroll-trigger' {
    import * as React from 'react';
  
    interface ScrollTriggerProps {
      onEnter?: () => void;
      onExit?: () => void;
      once?: boolean;
      children?: React.ReactNode;
    }
  
    export default class ScrollTrigger extends React.Component<ScrollTriggerProps> {}
  }
  