import $ from 'jquery';
import { getEpisodesOfShow, searchShowsByTerm } from "./model.ts";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");
import {Ishow, Iepisode, IshowResponse } from './interfaces';


import { MISSING_IMAGE_URL } from './model.ts';


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows: Array<any>) {
  $showsList.empty();
  // const x = "https://static.tvmaze.com/" +
  //   "uploads/images/medium_portrait/160/401704.jpg"
  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src=${show.image.medium || MISSING_IMAGE_URL}
              alt="Bletchly Circle San Francisco"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `
    );

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val() as string;
  const shows = await searchShowsByTerm(term);
  populateShows(shows);

}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

$showsList.on('click', ('.Show-getEpisodes'),async (evt) => {
  console.log('the event',evt);
  const $evt = $(evt)
  console.log('the evt$',$evt);
  const $id = $evt[0].target.closest('[data-show-id]');
  console.log('the id$',$id);

  const episodes = await getEpisodesOfShow(1767)
  $episodesArea.show();

  for (const episode of episodes){
    const $episode = $(`<div>${episode.id}</div>`);

    $episodesArea.append($episode);
  }
});


/** Write a clear docstring for this function... */

function populateEpisodes(episodes) {
  console.log(getEpisodesOfShow(1));
}