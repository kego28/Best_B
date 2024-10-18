import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
    })

    export class OrderService {
        private apiUrl = 'YOUR_API_URL'; // Replace with your actual API URL

        constructor(private http: HttpClient) {}
        placeOrder(orderDetails: any): Observable<any> {
            // Implement API call to place the order
            return this.http.post('/api/orders', orderDetails);
            }
    getOrderStatus(orderId: string): Observable<any> {
                // Implement API call to get order status
               return this.http.get(`/api/orders/${orderId.toString()}/status`);
    }

    updateOrderStatus(orderId: string, status: string): Observable<any> {
                    // Implement API call to update order status
                    // This should trigger an email notification on the backend
                    return this.http.get(`/api/orders/${orderId.toString()}/status`);
       
                    }

                    getUserOrders(): Observable<any> {
                        return this.http.get('${this.apiUrl}/orders');

                
                }
                getCurrentUser(): Observable<any> {
                    return this.http.get(`${this.apiUrl}/user`).pipe(
                      catchError(this.handleError)
                    );
                  }

                  private handleError(error: any) {
                    console.error('An error occurred:', error);
                    return throwError('Something went wrong. Please try again later.');
                  }  

            }
                    
