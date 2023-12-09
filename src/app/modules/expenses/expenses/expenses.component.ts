import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AuthService, User } from 'src/config/auth.service';
import { NavigationService } from 'src/config/navigation.service';
import { ExpensesService } from '../expenses.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';

declare const AdobeDC: any; // Declare AdobeDC as any to avoid TypeScript errors

@Component({
  standalone: true,
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  imports: [CommonModule, ExpensesComponent, MatTableModule],
  encapsulation: ViewEncapsulation.None,
})
export class ExpensesComponent {
  user: User | null = null;
  features: string[] = [];
  pdfData: any = null;
  isFetching: boolean = false;
  isPdfUploading: boolean = false;

  pdfTableColumns: string[] = [];

  pdfTableDataSource: any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  ];
  private adobeDCView: any; // Declare adobeDCView as any to avoid TypeScript errors

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private expensesService: ExpensesService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.navigationService.toggleNavigationbarVisibility(true);
    this.authService.getActiveUser().subscribe((user: User | null) => {
      this.user = user;
    });
  }
  async handleExtractText() {
    this.isFetching = true;
    this.pdfData = await this.expensesService.extractPdfText();
    console.log('pdf data received:', this.pdfData);
    this.isFetching = false;
  }

  async handleUploadPDF() {
    this.isPdfUploading = true;
    console.log('uploaded pdf');
    this.adobeDCView = new AdobeDC.View({
      clientId: environment.adobeEmbed.clientId,
      divId: 'adobe-dc-view',
    });

    this.adobeDCView.previewFile(
      {
        content: {
          location: {
            url: 'https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf',
          },
        },
        metaData: { fileName: 'Bodea Brochure.pdf' },
      },
      { embedMode: 'SIZED_CONTAINER' }
    );
    this.isPdfUploading = false;
  }
}
