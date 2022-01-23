import { ReactChild } from 'react';

export default interface PrimaryProps {
  children?: ReactChild;
  onClick: () => void;
}
