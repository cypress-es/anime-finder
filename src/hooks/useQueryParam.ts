import { useLocation } from 'react-router-dom';

export const useQueryParam = (param: string): string|null => {
  const urlParams = new URLSearchParams(useLocation().search);
  return urlParams.get(param);
};
