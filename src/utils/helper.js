// import { useDispatch, useSelector } from 'react-redux';
// import { getPaintingsByFilters } from '../store/paintingsSlice';
// import { GET_ALL_PAINTINGS } from '../requests/routes';
//
// export const getEntitiesByFilter = () => {
//   console.log('entered getEntitiesByFilter');
//   const querryStr = new URL(GET_ALL_PAINTINGS);
//   const dispatch = useDispatch();
//   const qValue = useSelector((state) => state.filter.qValue);
//   const authorId = useSelector((state) => state.filter.authorId);
//   const locationId = useSelector((state) => state.filter.locationId);
//   const createdGte = useSelector((state) => state.filter.created_gte);
//   const createdLte = useSelector((state) => state.filter.created_lte);
//
//   if (qValue) {
//     querryStr.searchParams.append('q', qValue);
//   }
//   if (authorId) {
//     querryStr.searchParams.append('authorId', authorId);
//   }
//   if (locationId) {
//     querryStr.searchParams.append('locationId', locationId);
//   }
//   if (createdGte) {
//     querryStr.searchParams.append('created_gte', createdGte);
//   }
//   if (createdLte) {
//     querryStr.searchParams.append('created_lte', createdLte);
//   }
//   console.log('dispatching');
//   dispatch(getPaintingsByFilters());
//   console.log('dispatched successfully');
// };
// export default getPaintingsByFilters();
