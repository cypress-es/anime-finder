export interface SelectOptions {
  value: number | string
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
