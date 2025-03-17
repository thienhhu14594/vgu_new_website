import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

// const apiUrl = 'http://172.16.2.212:8055';
const apiUrl = '/directus';
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
    return this.http
      .get(
        `${apiUrl}/items/landing_page?fields=*,*.source_id.*.type&&sort=section_order`,
        {
          withCredentials: true,
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
        }
      )
      .pipe(
        retry(2), // Retry failed requests
        catchError((error) => {
          console.error('API Error:', error);
          return throwError(() => error);
        })
      );
  }
  getPrograms(): Observable<any> {
    return this.http.get(
      `${apiUrl}/items/program_detail?fields=title,content,image,Levels,name`
    );
  }
  getProgramDetail(program_name: string): Observable<any> {
    return this.http.get(
      `${apiUrl}/items/program_detail?filter[title][_eq]=${program_name}`
    );
  }
  getUpperUnits(): Observable<any> {
    return this.http.get(
      `${apiUrl}/items/departments?filter[unit][_null]=true`
    );
  }
  getLowerUnits(): Observable<any> {
    return this.http.get(`${apiUrl}/items/department_units`);
  }
  getDepartments(unitId: string): Observable<any> {
    return this.http.get(
      `${apiUrl}/items/departments?filter[unit][_eq]=${unitId}`
    );
  }
  getDepartmentsName(id: string): Observable<any> {
    return this.http.get(`${apiUrl}/items/departments?filter[id][_eq]=${id}`);
  }
  getStaffs(departmentId: string): Observable<any> {
    return this.http.get(
      `${apiUrl}/items/Staffs?filter[department][_eq]=${departmentId}`
    );
  }
  getStaffInfo(staffId: string): Observable<any> {
    return this.http.get(`${apiUrl}/items/Staffs?filter[id][_eq]=${staffId}`);
  }

  ////////////////////////////////////////////////////////
}
