// eslint-disable-next-line no-unused-vars,import/prefer-default-export
import { createBrowserHistory } from 'history';
import { BASE_URL } from '../requests/routes';

export const stringToQuery = new URL(`${BASE_URL}/paintings`);
stringToQuery.searchParams.append('_page', 1);

// eslint-disable-next-line import/prefer-default-export
export const useCustomHook = () => {
  const setParamToCurrLocation = (name, value) => {
    switch (name) {
      case '_q':
        stringToQuery.searchParams.set('q', value);
        break;
      case 'authorId':
        stringToQuery.searchParams.set('authorId', value);

        break;
      case 'locationId':
        stringToQuery.searchParams.set('locationId', value);
        break;
      case 'created_gte':
        stringToQuery.searchParams.set('created_gte', value);
        break;
      case 'created_lte':
        stringToQuery.searchParams.set('created_lte', value);
        break;
      case '_page':
        if (!name) {
          stringToQuery.searchParams.set(name, 1);
        } else {
          stringToQuery.searchParams.set(name, value);
        }
        break;
      default:
    }
  };
  const deleteParamFromCurrLocation = (name) => {
    switch (name) {
      case '_q':
        stringToQuery.searchParams.delete('q');

        break;
      case 'authorId':
        stringToQuery.searchParams.delete('authorId');

        break;
      case 'locationId':
        stringToQuery.searchParams.delete('locationId');

        break;
      case 'created_gte':
        stringToQuery.searchParams.delete('created_gte');
        break;
      case 'created_lte':
        stringToQuery.searchParams.delete('created_lte');
        break;
      default:
    }
  };
  return { stringToQuery, setParamToCurrLocation, deleteParamFromCurrLocation };
};
