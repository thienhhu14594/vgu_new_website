import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getImageUrl(img: string) {
    return apiUrl+'/assets/'+img;
  }

}
