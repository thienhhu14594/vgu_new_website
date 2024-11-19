import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createDirectus, readItems } from '@directus/sdk'

const apiUrl = 'http://localhost:8055';
const directus = createDirectus(apiUrl)

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
    }
}

@Injectable({
  providedIn: 'root'
})
export class DirectusService {

  constructor(private http: HttpClient) { }

  getCarousel(): Observable<any> {
    return this.http.get(`${apiUrl}/items/carousel_image`)
  }

  getPartnerBlock(): Observable<any> {
    return this.http.get(`${apiUrl}/items/block_image_slideshow`)
  }

  getBlockImage(id: any): Observable<any> {
    const params = new HttpParams().set('filter[block_image_slideshow_id][_eq]', id);
    return this.http.get(`${apiUrl}/items/block_image_slideshow_files`, { params });
  }

  getTest(): Observable<any> {
    return this.http.get(`${apiUrl}/items/test`)
  }

  getPosts(): Observable<any> {
    return this.http.get(`${apiUrl}/items/posts`)
  }

  getHeroSection(): Observable<any> {
    return this.http.get(`${apiUrl}/items/HeroSection`)
  }

  getSlide(): Observable<any> {
    return this.http.get(`${apiUrl}/items/slide`)
  }

  getUniversityPartner(): Observable<any> {
    return this.http.get(`${apiUrl}/items/universityPartner`)
  }

  getGeneralNews(): Observable<any> {
    return this.http.get(`${apiUrl}/items/generalNews`)
  }

  getAdmission(): Observable<any> {
    return this.http.get(`${apiUrl}/items/admission`)
  }

  getImageUrl(img: string) {
    return apiUrl+'/assets/'+img;
  }

}
