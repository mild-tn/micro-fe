export interface InputProps {
  typeInput: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
