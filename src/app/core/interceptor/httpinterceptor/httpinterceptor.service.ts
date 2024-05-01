import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpinterceptorService {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const authReq = req.clone({ headers });

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse && event.status === 200) {
            // Show success snackbar
            this.snackBar.open('Success', 'Close', { duration: 3000 });
          }
        },
        (error: HttpErrorResponse) => {
          // Show error snackbar
          this.snackBar.open(error.message, 'Close', { duration: 3000 });
          return throwError(error);
        }
      )
    );
  }
}
