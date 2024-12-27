import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://172.16.2.212:8055';
// const apiUrl = 'http://localhost:8055';

export interface Test {
  slug: string;
  stt: string;
}

export interface Posts {
  slug: string;
  title: string;
  content: string;
  image: {
    slug: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DirectusService {
  constructor(private http: HttpClient) {}

  getImageUrl(img: string) {
    return apiUrl + '/assets/' + img;
  }

  getData(dataName: string): Observable<any> {
    return this.http.get(`${apiUrl}/items/${dataName}`);
  }

  getCarousel(): Observable<any> {
    return this.http.get(`${apiUrl}/items/carousel_image`);
  }

  getPartnerBlock(): Observable<any> {
    return this.http.get(`${apiUrl}/items/block_image_slideshow`);
  }

  getBlockImage_byID(id: any): Observable<any> {
    //input the id for image block
    const params = new HttpParams().set(
      'filter[block_image_slideshow_id][_eq]',
      id
    );
    return this.http.get(`${apiUrl}/items/block_image_slideshow_files`, {
      params,
    });
  }

  // getVGUnumber(): Observable<any> {
  //   return this.http.get(`${apiUrl}/items/vgu_in_numbers`);
  // }

  // getOverviewPic(): Observable<any> {
  //   return this.http.get(`${apiUrl}/items/vgu_in_numbers`);
  // }

  getPosts(): Observable<any> {
    return this.http.get(`${apiUrl}/items/posts?fields=*,author.name`);
  }

  getNavButtons(): Observable<any> {
    return this.http.get(`${apiUrl}/items/navButton`);
  }
  getThemeColors(): Observable<any> {
    return this.http.get(`${apiUrl}/items/themesColor?fields=*,*.color`);
  }
  getLandingPage(): Observable<any> {
    return this.http.get(`${apiUrl}/items/landing_page?fields=*,*.source_id.*.type&&sort=section_order`);
  }
  ////////////////////////////////////////////////////////
}
