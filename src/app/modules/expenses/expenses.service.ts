import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private http: HttpClient) {}

  async extractPdfText(): Promise<any> {
    try {
      const data = await firstValueFrom(
        this.http.post(`${environment.apiEndpoint}/api/extract-pdf`, {})
      );

      // Handle the extracted JSON data here
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  }
}
