

export interface IshowResponse {
  show:Ishow;
  score:number;
}


export interface Ishow {
    id: number;
    name: string;
    summary: string;
    image?: string;
  }


export interface Iepisode {
  id: number;
  name: string;
  season: number;
  number: number;
}




// export {
//   Ishow,
//   Iepisodes
// };
