import {
  withState, pure, compose, withHandlers,
} from 'recompose';

const withModal = compose(
  withState('isOpen', 'setOpen', false),
  withHandlers({
    onToggle: ({ isOpen, setOpen }) => () => {
      setOpen(!isOpen);
    },
  }),
  pure,
);

export default withModal;
