import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerDataUpdateInterceptor implements HttpInterceptor {
  private newKey: string;

  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpResponse<any>> {
    return next.handle(req)
      .pipe(
        map((request: HttpResponse<any>) => {
          this.changeData(request.body);
          return request;
        })
      );
  }

  private changeData(data: any): void {

    if (typeof data !== 'object' || !data) {
      return data;
    }

    Object.keys(data).map( oldKey => {
      this.newKey = oldKey;
      if (this.newKey.indexOf('_') > 0 || this.newKey[0] !== this.newKey[0].toLowerCase()) {

        this.newKey = this.newKey
          .split('_')
          .map((elem, index) => {
            elem = elem.toLowerCase();
            if ( index > 0 ) {
              elem = elem.charAt(0).toUpperCase() + elem.slice(1);
            }
            return elem;
          })
          .join('');

        data[this.newKey] = data[oldKey];
        delete data[oldKey];
      }

      this.changeData(data[this.newKey]);
    });
  }
}
