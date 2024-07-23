import { ChangeEvent } from "react";

export interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
  value?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}