import { Fade, Slide, Zoom } from 'react-awesome-reveal';

export const SlideAnimation = ({children,direction,cascade, duration}) => {
  return (
    <Slide direction={direction} cascade={cascade} triggerOnce duration={duration}>{children}</Slide>
  )
}

export const FadeAnimation = ({children,damping,delay,cascade}) => {
  return (
    <Fade triggerOnce damping={damping} cascade={cascade} delay={delay}>{children}</Fade>
  )
}

export const ZoomAnimation = ({children}) => {
  return (
    <Zoom triggerOnce>{children}</Zoom>
  )
}