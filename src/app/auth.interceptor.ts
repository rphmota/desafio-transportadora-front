import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = 'user';
    const password = 'password';
    const authHeader = 'Basic ' + btoa(`${username}:${password}`);

    const authReq = req.clone({
      setHeaders: {
        Authorization: authHeader
      }
    });

    return next.handle(authReq);
  }
}
