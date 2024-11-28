import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isDesktop(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !(window.innerWidth < 1024);
    }
    return true;
  }
}
