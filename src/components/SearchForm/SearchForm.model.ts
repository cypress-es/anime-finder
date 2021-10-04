export interface SelectOptions {
  value: number
  label: string
}

interface Options {
  [key: string]: number
}
interface SubmitParams {
  inputValue: string
  selectedOptions: Options
}

export interface SearchFormProps {
  onSubmit: (params: SubmitParams) => void
}
