import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.css',
})
export class OrganizationComponent {
  activeTab: string = 'central-institutions';

  units = [
    {
      id: 'central-institutions',
      name: 'Central Institutions',
      content: [
        'Library Services',
        'Sports and Recreation Center',
        'Health and Counseling Center',
      ],
    },
    {
      id: 'faculty',
      name: 'Faculty',
      content: [
        'Faculty of Science',
        'Faculty of Engineering',
        'Faculty of Arts',
      ],
    },
    {
      id: 'administrative-units',
      name: 'Administrative Units',
      content: [
        'Organization - Human Resources - Administrative Department',
        'Presidential Board Office',
        'Academic and Student Affairs Department',
        'Research Management Department',
        'Finance - Accounting Department',
        'Building and Facility Management Department',
        'Information Technology Department',
        'Strategy and Quality Management Department',
        'Marketing and Student Recruitment Department',
      ],
    },
    {
      id: 'central-units',
      name: 'Central Units',
      content: ['IT Infrastructure Unit', 'Data Management Office'],
    },
    {
      id: 'others',
      name: 'Others',
      content: ['Alumni Association', 'Community Outreach Programs'],
    },
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
