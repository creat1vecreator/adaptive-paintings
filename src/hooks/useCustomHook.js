// eslint-disable-next-line no-unused-vars,import/prefer-default-export
import { createBrowserHistory } from 'history';
import { BASE_URL } from '../requests/routes';

export const stringToQuery = new URL(`${BASE_URL}/paintings`);
export const refOfWindow = window.location;
stringToQuery.searchParams.append('_page', 1);

// eslint-disable-next-line import/prefer-default-export
export const useCustomHook = () => {
  const myHistory = createBrowserHistory();
  console.log('m h', myHistory);
  console.log('my history:', myHistory);
  const setParamToCurrLocation = (name, value) => {
    console.log('entere with:', name, value);
    switch (name) {
      case '_q':
        myHistory.push(`?q=${value}`);
        stringToQuery.searchParams.set('q', value);
        break;
      case 'authorId':
        console.log('entered 1');
        stringToQuery.searchParams.set('authorId', value);
        myHistory.push(`?authorId=${value}`);
        break;
      case 'locationId':
        console.log('entered 1');
        myHistory.push(`?locationId=${value}`);
        stringToQuery.searchParams.set('locationId', value);
        break;
      case 'created_gte':
        myHistory.push(`?created_gte=${value}`);
        stringToQuery.searchParams.set('created_gte', value);
        break;
      case 'created_lte':
        myHistory().push(`?created_lte=${value}`);
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
        myHistory.replace('q', '');
        break;
      case 'authorId':
        stringToQuery.searchParams.delete('authorId');
        myHistory.replace('authorId', '');
        break;
      case 'locationId':
        stringToQuery.searchParams.delete('locationId');
        myHistory.replace('locationId', '');

        break;
      case 'created_gte':
        stringToQuery.searchParams.delete('created_gte');
        myHistory.replace('created_gte', '');
        break;
      case 'created_lte':
        stringToQuery.searchParams.delete('created_lte');
        myHistory.replace('created_lte', '');
        break;
      default:
    }
  };
  return { stringToQuery, refOfWindow, setParamToCurrLocation, deleteParamFromCurrLocation };
};
