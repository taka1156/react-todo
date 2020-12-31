type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputType = {
  id: string;
  name: string;
  labelText: string;
  type: string;
  register: () => RefReturn;
};

export { InputType };
