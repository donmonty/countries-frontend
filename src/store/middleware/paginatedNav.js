import { paginationInfoSet } from '../countries'

const paginatedNav = ({ dispatch, getState }) => next => action => {

  if (action.type !== 'countries/countriesReceived') return next(action);

  // console.log("/////////////////////////////////////////////")
  // console.log("Printing paylod from new middleware", action.payload)
  // console.log("Printing action type from new middleware. Processing: ", action.type)

  if (!action.payload.next && !action.payload.previous) {
    const currentPage = 1;
    const prevPage = null;
    const nextPage = null;
    const limit = action.payload.count;
    const pages = 1;
    dispatch(paginationInfoSet({
      currentPage,
      prevPage,
      nextPage,
      limit,
      pages
    }))
    return next(action);
  } else if (!action.payload.previous) {
    // console.log(":::::::::::::::::::::::::::::::::::::::::")
    // console.log("We are at the first page of results!")
    // If there is no previous, we are at the first page of results
    const currentPage = action.payload.next.page - 1;
    const prevPage = null;
    const limit = action.payload.next.limit;
    const pages = Math.ceil(action.payload.results.count / limit)
    let nextPage;
    pages === 1 ? nextPage = null : nextPage = action.payload.next.page 

    // console.log("currentPage", currentPage)
    // console.log("prevPage", prevPage)
    // console.log("nextPage", nextPage)

    dispatch(paginationInfoSet({
      currentPage,
      prevPage,
      nextPage,
      limit,
      pages
    }))
    return next(action);
  } else if (!action.payload.next) {
    
    // If there is no next, we are at the last page of results
    const currentPage = action.payload.previous.page + 1; 
    const prevPage = action.payload.previous.page;
    const nextPage = null;
    const limit = action.payload.previous.limit;
    const pages = Math.ceil(action.payload.results.count / limit)
    dispatch(paginationInfoSet({
      currentPage,
      prevPage,
      nextPage,
      limit,
      pages
    }))
    return next(action);
  } else if (action.payload.next && action.payload.previous) {
    // console.log(":::::::::::::::::::::::::::::::::::::::::")
    // console.log("We are in the middle of results!")
    // If we are not at the first or last page
    const currentPage = action.payload.next.page - (action.payload.previous.page + 1);
    const prevPage = action.payload.previous.page;
    const nextPage = action.payload.next.page;
    const limit = action.payload.next.limit;
    const pages = Math.ceil(action.payload.results.count / limit)
    dispatch(paginationInfoSet({
      currentPage,
      prevPage,
      nextPage,
      limit,
      pages
    }))
    return next(action);
  } else {
    const currentPage = 1;
    const prevPage = null;
    const nextPage = null;
    const limit = action.payload.count;
    const pages = 1;
    dispatch(paginationInfoSet({
      currentPage,
      prevPage,
      nextPage,
      limit,
      pages
    }))
    return next(action);
  }
  
}

export default paginatedNav;