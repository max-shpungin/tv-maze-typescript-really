const MISSING_IMAGE_URL = "https://tinyurl.com/missing-tv";
const TVMAZE_API_URL = "http://api.tvmaze.com/";
// const TVMAZE_EPISODE_API =
import {Ishow, Iepisode, IshowResponse } from './interfaces';

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function searchShowsByTerm(term: string): Promise<object> {
  // ADD: Remove placeholder & make request to TVMaze search shows API.

  const queryParams = {
    'q': term
  };

  const params: URLSearchParams = new URLSearchParams(queryParams);

  const resp = await fetch(`${TVMAZE_API_URL}search/shows?` + params, {
    method: 'GET',
  });

  const rawShowData = await resp.json();

  const showData = rawShowData.map((showData: any) => {
    return {
      "id": showData.show.id,
      "name": showData.show.name,
      "summary": showData.show.summary,
      "image": showData.show.image
    };
  });

  return showData;
}


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id:number) {

  const resp = await fetch(`${TVMAZE_API_URL}shows/${id}/episodes`);
  const episodes:Iepisode[] = await resp.json();

  return episodes;
}


export {
  searchShowsByTerm,
  getEpisodesOfShow,
  TVMAZE_API_URL,
  MISSING_IMAGE_URL,
};
