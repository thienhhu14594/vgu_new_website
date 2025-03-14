import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectusService } from '../../../../directus.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, RouterLink],
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css'], // ✅ Fixed `styleUrls`
})
export class ProgramDetailComponent {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  a: string | null = null;
  programDetail: any;
  safeHtmlContent: { [key: string]: SafeHtml } = {};

  constructor(public directus: DirectusService) {}
  
  ngOnInit() {
    this.a = this.route.snapshot.paramMap.get('program');
    this.directus.getProgramDetail(this.a).subscribe((data) => {
      this.programDetail = data.data[0];
      
      // Sanitize all rich text fields
      if (this.programDetail) {
        // Assuming these are your 6 rich text field names
        const richTextFields = [
          'Target_Group', 
          'Program_Structure', 
          'Laboratories', 
          'Study_Subjects', 
          'Learning_Experience', 
          'Faculty'
        ];
        
        richTextFields.forEach(field => {
          if (this.programDetail[field]) {
            this.safeHtmlContent[field] = this.sanitizer.bypassSecurityTrustHtml(
              this.transformDirectusUrls(this.programDetail[field],'172.16.2.212')
            );
          }
        });
      }
    });
  }
  public scroll(el: string) {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Element with ID "${el}" not found.`);
    }
  }

  transformDirectusUrls(htmlContent: string, serverDomain: string): string {
    if (!htmlContent) return htmlContent;
    
    // Create regex patterns to match different URL formats
    // This handles http://, https://, and domain-only formats
    const patterns = [
      new RegExp(`https?://${serverDomain}/directus/`, 'g'),
      new RegExp(`${serverDomain}/directus/`, 'g')
    ];
    
    let transformedContent = htmlContent;
    
    // Apply each pattern replacement
    patterns.forEach(pattern => {
      transformedContent = transformedContent.replace(pattern, '/directus/');
    });
    
    return transformedContent;
  }
}
