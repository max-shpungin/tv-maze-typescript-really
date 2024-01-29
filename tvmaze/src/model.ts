const MISSING_IMAGE_URL = "https://tinyurl.com/missing-tv";
const TVMAZE_API_URL = "http://api.tvmaze.com/";

const o:{name:"Joel"} = {name:"Joel"}
/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function searchShowsByTerm(term: string) : Promise<object> {
  // ADD: Remove placeholder & make request to TVMaze search shows API.

  const queryParams =  {
    'q': term
  }

  const params:URLSearchParams = new URLSearchParams(queryParams);

  const resp = await fetch(`${TVMAZE_API_URL}search/shows?` + params, {
    method: 'GET',
  });

  const showData = await resp.json();

  return showData;
  }


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
}


export {
  searchShowsByTerm,
  getEpisodesOfShow,
  TVMAZE_API_URL,
  MISSING_IMAGE_URL,
};
