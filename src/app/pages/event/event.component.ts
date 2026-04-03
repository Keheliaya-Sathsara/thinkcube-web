import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Event {
  id: string | number;
  type: string;
  title: string;
  date: string;
  time: string;
  timezone: string;
  isInPerson: boolean;
  link: string;
  imageUrl: string;
  logoUrl: string;
  eventDate: Date; // Added for proper date comparison
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  events: Event[] = [
    {
      id: 7,
      type: 'Sport Event',
      title: 'KPL 2025: Where Team Spirit Meets the Pitch!',
      date: 'Sun, Oct 05, 2025',
      time: '8.30 AM',
      timezone: '(+0530)',
      isInPerson: true,
      link: '7',
      imageUrl: '/images/event/eventpages/Cricket-2025/20.png',
      logoUrl: '/images/event/logo.png',
      eventDate: new Date(2025, 9, 5, 8, 0), // Month is 0-indexed (11 = December)
    },
    {
      id: 1,
      type: 'Festival Event',
      title: 'Kapital Awurudu Celebration 2025',
      date: 'Fri, Apr 11, 2025',
      time: '8.00 AM',
      timezone: '(+0530)',
      isInPerson: true,
      link: '6',
      imageUrl: '/images/event/eventpages/avurudu/banner.jpg',
      logoUrl: '/images/event/logo.png',
      eventDate: new Date(2024, 11, 5, 9, 0), // Month is 0-indexed (11 = December)
    },
    {
      id: 2,
      type: 'Sport Event',
      title: 'Kapital Trophy 2025 (Entire Group Event)',
      date: 'Mon, Oct 14, 2024',
      time: '7:30 PM',
      timezone: '(+0530)',
      isInPerson: true,
      link: '1',
      imageUrl: '/images/event/Kapital_trophy.png',
      logoUrl: '/images/event/logo.png',
      eventDate: new Date(2024, 9, 14, 19, 30), // Month is 0-indexed (9 = October)
    },
    {
      id: 3,
      type: 'Festival Event',
      title: 'Kapital Bollywood Night 2024',
      date: 'Sun, Dec 15, 2024',
      time: '7:30 PM',
      timezone: '(+0530)',
      isInPerson: true,
      link: '2',
      imageUrl: '/images/event/Bollywood_night.png',
      logoUrl: '/images/event/logo.png',
      eventDate: new Date(2024, 11, 15, 19, 30), // Month is 0-indexed (11 = December)
    },
    {
      id: 4,
      type: 'Festival Event',
      title: 'Kapital Group Halloween Night 2024',
      date: 'Fri, Dec 5, 2024',
      time: '9:00 AM',
      timezone: '(+0530)',
      isInPerson: true,
      link: '3',
      imageUrl: '/images/event/Halloween_night.png',
      logoUrl: '/images/event/logo.png',
      eventDate: new Date(2024, 11, 5, 9, 0), // Month is 0-indexed (11 = December)
    },
    {
      id: 5,
      type: 'Festival Event',
      title: 'Kapital Christmas Party 2023',
      date: 'Sun, Dec 17, 2023',
      time: '7:30 PM',
      timezone: '(+0530)',
      isInPerson: true,
      link: '4',
      imageUrl: '/images/event/eventpages/Christmas-2023/Christmas-2023-banner.jpg',
      logoUrl: '/images/event/logo.png',
      eventDate: new Date(2024, 11, 5, 9, 0), // Month is 0-indexed (11 = December)
    },
    {
      id: 6,
      type: 'Sport Event',
      title: 'Kapital Cricket Tournament 2023',
      date: 'Sun, May 21, 2023',
      time: '7:30 PM',
      timezone: '(+0530)',
      isInPerson: true,
      link: '5',
      imageUrl: '/images/event/Cricket2023.png',
      logoUrl: '/images/event/logo.png',
      eventDate: new Date(2024, 11, 5, 9, 0), // Month is 0-indexed (11 = December)
    },
  ];

  filteredEvents: Event[] = [];
  activeTab: 'upcoming' | 'past' = 'past';
  activeFilter: string = 'all';
  eventTypes: string[] = ['Sport Event', 'Festival Event', 'Marketing']; // Define unique event types

  constructor() {}

  ngOnInit(): void {
    // Initialize filteredEvents with all events when component loads
    this.filterEvents();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setActiveTab(tab: 'upcoming' | 'past'): void {
    this.activeTab = tab;
    this.filterEvents();
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filterEvents();
  }

  filterEvents(): void {
    // Get current date for comparison
    const currentDate = new Date();

    // First filter by tab (upcoming/past)
    let tabFiltered = [...this.events];

    // Filter by upcoming/past status
    if (this.activeTab === 'upcoming') {
      tabFiltered = tabFiltered.filter((event) => event.eventDate >= currentDate);
    } else {
      tabFiltered = tabFiltered.filter((event) => event.eventDate < currentDate);
    }

    // Then filter by type
    if (this.activeFilter === 'all') {
      this.filteredEvents = tabFiltered;
    } else {
      this.filteredEvents = tabFiltered.filter((event) => event.type === this.activeFilter);
    }
  }
}
