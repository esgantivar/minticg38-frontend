import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = sessionStorage.getItem("jwt")
    if (jwt) {
      return next.handle(req.clone({
        setHeaders: {
          "Authorization": `Bearer ${jwt}`
        }
      }));
    }
    return next.handle(req);
  }
}
