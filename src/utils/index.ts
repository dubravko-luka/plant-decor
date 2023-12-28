import { ApiResponseError } from '@/api/services/apiClient';

export const isApiResponseError = (obj: any): obj is ApiResponseError => {
  return (
    'error' in obj &&
    'status' in obj &&
    'statusText' in obj
  );
}

export const hasValue = (value: any) => {
  if (value !== null && value !== undefined && value !== '') {
    return true
  }
  return false
}

export const handleObjectQuery = async (router: any, key: string, value: any, path: string) => {
  const as: any = undefined;
  router.replace(
    {
      pathname: path,
      query: {
        ...router.query,
        [key]: value,
      },
    },
    as,
    { shallow: true },
  );
};