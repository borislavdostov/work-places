import { HttpHeaders } from "@angular/common/http";

export const snackBarDuration = 1000 * 5;
export const requestHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };