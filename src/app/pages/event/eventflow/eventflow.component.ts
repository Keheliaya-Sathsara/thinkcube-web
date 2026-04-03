import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventflowService } from './eventflow.service';
import { CommonModule } from '@angular/common';

interface Eventflow {
  banner: string;
  heading: string;
  title?: string;
  subtitle?: string;
  isInPerson?: boolean;
  contentone: string;
  galleryItems?: { src: string; size?: string }[];
}

@Component({
  selector: 'app-eventflow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventflow.component.html',
  styleUrls: ['./eventflow.component.scss'],
})
export class EventflowComponent implements OnInit {
  eventflows: { [key: string]: Eventflow } = {};
  eventflow: Eventflow | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventflows = {
      '1': {
        banner: '/images/event/eventpages/kapitalcorpevent.jpg',
        title: 'Kapital Trophy (Entire Group Event)',
        subtitle: 'Mon, Oct 14, 2024, 7:30 PM (+0530)',
        heading: 'Kapital Trophy – The Ultimate Cricket Showdown!',
        isInPerson: true,
        contentone:
          "Kapital Corp proudly presents the Kapital Trophy, an exhilarating cricket tournament that brings together teams from across our group of companies. This event is more than just a game—it’s a celebration of teamwork, sportsmanship, and the unbreakable spirit of our Kapital family. Gear up for a thrilling competition as our talented players battle for glory, showcasing their skills, determination, and passion for cricket. Whether you're on the field or cheering from the sidelines, the Kapital Trophy promises an unforgettable experience filled with excitement, camaraderie, and championship moments! Stay tuned for match schedules, team lineups, and live updates. Let’s make this tournament one to remember!",
        galleryItems: [
          { src: '/images/event/eventpages/8.jpg', size: 'lg' },
          { src: '/images/event/eventpages/2.png', size: 'lg' },
          { src: '/images/event/eventpages/9.jpg', size: 'xl' },
          { src: '/images/event/eventpages/11.png', size: 'md' },
          { src: '/images/event/eventpages/5.png', size: 'lg' },
          { src: '/images/event/eventpages/4.jpg', size: 'sm' },
          { src: '/images/event/eventpages/6.png' },
          { src: '/images/event/eventpages/1.jpg', size: 'lg' },
          { src: '/images/event/eventpages/7.png', size: 'lg' },
          { src: '/images/event/eventpages/3.png', size: 'lg' },
        ],
      },
      '2': {
        banner: '/images/event/eventpages/Christmas-2025/Bollywood-night.jpg',
        title: 'Kapital Group Bollywood Night (Entire Group Event)',
        subtitle: 'Sun, Dec 15, 2024, 7.00 PM (+0530)',
        heading: 'Kapital Bollywood Night – Xmas Stars In Bollywood!',
        isInPerson: true,
        contentone:
          'Kapital Group proudly presents the Kapital Group Bollywood Night, an unforgettable celebration of vibrant music, dazzling dance, and the timeless glamour of Bollywood! Step into a world of colors, rhythm, and star-studded elegance, where the magic of Hindi cinema comes to life. This electrifying event promises an evening filled with iconic Bollywood tunes, energetic dance performances, and plenty of laughter. Get ready to groove to the beats of your favorite songs, watch stunning choreographed routines, and perhaps even hit the dance floor yourself! As a special twist, everyone is invited to dress like your favorite Bollywood stars, channeling the glitz and glamour of the silver screen.',
        galleryItems: [
          { src: '/images/event/eventpages/Christmas-2025/1.png', size: 'xl' },
          { src: '/images/event/eventpages/Christmas-2025/4.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2025/6.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2025/7.png' },
          { src: '/images/event/eventpages/Christmas-2025/5.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2025/3.png', size: 'xl' },
          { src: '/images/event/eventpages/Christmas-2025/8.png', size: 'xl' },
          { src: '/images/event/eventpages/Christmas-2025/2.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2025/9.png' },
          { src: '/images/event/eventpages/Christmas-2025/10.png', size: 'xl' },
          { src: '/images/event/eventpages/Christmas-2025/11.png', size: 'xl' },
        ],
      },
      '3': {
        banner: '/images/event/eventpages/Hallowen-night/Halloween-banner.png',
        title: 'Kapital Group Halloween Night (Entire Group Event)',
        subtitle: 'Sun, Oct 29, 2024, 7.00 PM (+0530)',
        heading: 'Kapital Group Halloween Night 2024 – Festival Cheers',
        isInPerson: true,
        contentone:
          'Kapital Group proudly presents the Kapital Group Halloween Night 2024—a night where the eerie meets the extraordinary. Step into a world of thrills, frights, and unforgettable fun as we transform the night into a hauntingly magical experience. Enjoy spine-tingling music, hair-raising dance performances, and a playlist that will have you dancing till the witching hour. Whether youre conjuring up your most creative costume or reveling in the spooky atmosphere, this event is all about embracing the Halloween spirit and creating lasting memories. a night filled with thrills, chills, and unforgettable moments at Kapital Group Halloween Night 2024. a night of laughter, surprises, and bone-chilling fun that will leave you talking about it till next year’s frightful festivity.',
        galleryItems: [
          { src: '/images/event/eventpages/Hallowen-night/3.png', size: 'xl' },
          { src: '/images/event/eventpages/Hallowen-night/1.png', size: 'lg' },
          { src: '/images/event/eventpages/Hallowen-night/5.png' },
          { src: '/images/event/eventpages/Hallowen-night/6.png', size: 'lg' },
          { src: '/images/event/eventpages/Hallowen-night/7.png', size: 'lg' },
          { src: '/images/event/eventpages/Hallowen-night/2.png', size: 'xl' },
          { src: '/images/event/eventpages/Hallowen-night/8.png' },
          { src: '/images/event/eventpages/Hallowen-night/9.png' },

          { src: '/images/event/eventpages/Hallowen-night/10.png', size: 'xl' },
        ],
      },
      '4': {
        banner: '/images/event/eventpages/Christmas-2023/Christmas-2023-banner.jpg',
        title: 'Kapital Group Christmas Party (Entire Group Event)',
        subtitle: 'Sun, Dec 17, 2023, 7.00 PM (+0530)',
        heading: 'Kapital Christmas Party 2023 – Festival Cheers',
        isInPerson: true,
        contentone:
          'Kapital Group proudly presents the Kapital Group Christmas Party 2023. Feel the rhythm of the season with lively music, electrifying dance performances, and a playlist that will have you singing and dancing all night long. Whether you are showcasing your best moves on the dance floor or simply soaking in the holiday vibes, this celebration is all about spreading joy and making memories.As a special touch, we invite everyone to dress in the classic Christmas colors—red and black—adding a touch of elegance and festive flair to the evening. So bring your holiday spirit, your best moves, and your brightest smiles for a night of laughter, celebration, and togetherness.',
        galleryItems: [
          { src: '/images/event/eventpages/Christmas-2023/1.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2023/2.png', size: 'md' },
          { src: '/images/event/eventpages/Christmas-2023/3.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2023/4.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2023/5.png' },
          { src: '/images/event/eventpages/Christmas-2023/6.png', size: 'lg' },
          { src: '/images/event/eventpages/Christmas-2023/7.png', size: 'md' },
          { src: '/images/event/eventpages/Christmas-2023/8.png' },
          { src: '/images/event/eventpages/Christmas-2023/9.png' },
          { src: '/images/event/eventpages/Christmas-2023/10.png', size: 'lg' },
        ],
      },
      '5': {
        banner: '/images/event/eventpages/Cricket-2023/Cricket-2023-banner.jpg',
        title: 'Kapital Cricket Tournament 2023 (Entire Group Event)',
        subtitle: 'Sun, May 21, 2023, 8.00 AM (+0530)',
        heading: 'Kapital Cricket Tournament 2023 – The Ultimate Cricket Showdown!',
        isInPerson: true,
        contentone:
          'Kapital Corp proudly presents the Kapital Cricket Tournament 2023, an exhilarating cricket tournament that brings together teams from across our group of companies. This event is more than just a game—it’s a celebration of teamwork, sportsmanship, and the unbreakable spirit of our Kapital family. Gear up for a thrilling competition as our talented players battle for glory, showcasing their skills, determination, and passion for cricket. Whether you are on the field or cheering from the sidelines, the Kapital Trophy promises an unforgettable experience filled with excitement, camaraderie, and championship moments! Stay tuned for match schedules, team lineups, and live updates. Let’s make this tournament one to remember!',
        galleryItems: [
          { src: '/images/event/eventpages/Cricket-2023/2.png' },
          { src: '/images/event/eventpages/Cricket-2023/3.png' },
          { src: '/images/event/eventpages/Cricket-2023/9.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2023/4.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2023/5.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2023/6.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2023/7.png' },
          { src: '/images/event/eventpages/Cricket-2023/8.png', size: 'lg' },
          { src: '/images/event/eventpages/Cricket-2023/10.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2023/1.png', size: 'xl' },
        ],
      },
      '6': {
        banner: '/images/event/eventpages/avurudu/banner.jpg',
        title: 'Kapital Awurudu Celebration 2025',
        subtitle: 'Fri, Apr 11, 2025, 8.00 AM (+0530)',
        heading: 'Kapital Awurudu Celebration 2025 – Festival Cheers',
        isInPerson: true,
        contentone:
          'Kapital Awurudu Celebration 2025 was a vibrant showcase of tradition, unity, and joy across the Kapital Group. The event brought employees together in a colorful tribute to Sri Lankan New Year customs, filled with laughter, cultural pride, and heartfelt connections. Traditional games sparked friendly competition, while vibrant attire and authentic food added to the festive spirit. From the rhythm of the raban to the warmth of shared moments, every aspect of the celebration reflected the deep-rooted values of community and togetherness. The Kapital Awurudu Celebration wasn’t just a cultural event—it was a beautiful reminder of the strength and spirit that define the Kapital family.',
        galleryItems: [
          { src: '/images/event/eventpages/avurudu/IMG_8.png', size: 'lg' },
          { src: '/images/event/eventpages/avurudu/IMG_6.png', size: 'lg' },
          { src: '/images/event/eventpages/avurudu/IMG_2.png', size: 'xl' },
          { src: '/images/event/eventpages/avurudu/IMG_3.png', size: 'xl' },
          { src: '/images/event/eventpages/avurudu/IMG_9.jpg', size: 'lg' },
          { src: '/images/event/eventpages/avurudu/IMG_4.jpg', size: 'lg' },
          { src: '/images/event/eventpages/avurudu/IMG_5.png', size: 'xl' },
          { src: '/images/event/eventpages/avurudu/IMG_10.jpg', size: 'xl' },
          { src: '/images/event/eventpages/avurudu/IMG_1.jpg', size: 'lg' },
          { src: '/images/event/eventpages/avurudu/IMG_11.jpg', size: 'lg' },
          { src: '/images/event/eventpages/avurudu/IMG_7.png', size: 'xl' },
        ],
      },
      '7': {
        banner: '/images/event/eventpages/Cricket-2025/20.png',
        title: 'KPL 2025: Where Team Spirit Meets the Pitch!',
        subtitle: 'Sun, Oct 05, 2025, 8.30 AM (+0530)',
        heading: 'Celebrating teamwork, talent, and a shared love for the game.',
        isInPerson: true,
        contentone:
          'The KPL 2025 brought together our Medcube family for a day filled with energy, sportsmanship, and excitement! From powerful hits to unbelievable catches, every moment reflected the same passion and teamwork we bring to our work every day. A big thank you to all our players, supporters, and organizers who made this event a success — both on and off the field. Here’s to more memories, more matches, and more Medcube moments! ',
        galleryItems: [
          { src: '/images/event/eventpages/Cricket-2025/6.png', size: 'lg' },
          { src: '/images/event/eventpages/Cricket-2025/3.png', size: 'lg' },
          { src: '/images/event/eventpages/Cricket-2025/2.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2025/14.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2025/5.png', size: 'lg' },
          { src: '/images/event/eventpages/Cricket-2025/1.png', size: 'lg' },
          { src: '/images/event/eventpages/Cricket-2025/11.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2025/10.png', size: 'xl' },
          { src: '/images/event/eventpages/Cricket-2025/7.png', size: 'lg' },
          { src: '/images/event/eventpages/Cricket-2025/19.png', size: 'lg' },
          { src: '/images/event/eventpages/Cricket-2025/17.png', size: 'xl' },
        ],
      },
    };

    // Get the eventflow key from URL parameters
    this.route.paramMap.subscribe((params) => {
      const eventflowKey = params.get('eventflow') || '1'; // Default to '1' if not found
      this.eventflow = this.eventflows[eventflowKey];

      console.log(`Loaded eventflow ${eventflowKey}:`, this.eventflow);
    });
  }
}
