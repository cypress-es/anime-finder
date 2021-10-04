export interface SelectOptions {
  value: number
  label: string
}

interface Options {
  [key: string]: number
}
export interface SubmitParams {
  inputValue: string
  selectedOptions: Options
}

export interface SearchFormProps {
  onSubmit: (params: SubmitParams) => void
}
