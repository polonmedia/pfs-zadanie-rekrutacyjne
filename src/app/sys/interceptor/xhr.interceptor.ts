import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, /* retry */ } from 'rxjs/operators';

@Injectable()
export class XHRInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        url: request.url,
        headers: request.headers.set('Angular', 'test')
      });
      return next.handle(request).pipe(
        // retry(1),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        }));
  }
}
