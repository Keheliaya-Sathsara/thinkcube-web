import { Component } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { news } from './news.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginatorIntlService } from '../../services/paginator-intl.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [MatPaginatorModule, CommonModule, MatIconModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }],
})
export class NewsComponent {
  currentArticleId: any | string;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  currentPage = 0;
  pageSize = 10;

newses: news[] = [
    {
      image: '/images/news/blog/sl_cricket.png',  // Updated to match article 1's banner
      name: 'Malith Weeramuni 20 January 2025',
      subject: "Game On: How Online & On-Demand Ticketing is Transforming Cricket for Sri Lanka's Fans",
      link: '1',
      content: 'Expert project management ensures infrastructure success, efficiency, quality, and sustainability.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/pagin-02.jpg',  // Matches article 2's banner
      name: 'Divya Perera',
      subject: "Unlocking Cricket's Digital Potential: Advanced Match Capturing and Analysis for SLC Domestic Matches",
      link: '2',
      content: 'Kapital Corp International accelerates infrastructure and tech growth through strategic global partnerships.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/pagin-03.jpg',  // Matches article 3's banner
      name: 'Divya Perera',
      subject: 'Modernizing Event Access: System-Based Accreditation Services for Sri Lanka Cricket',
      link: '3',
      content: 'Cities integrate technology, sustainability, mobility, and green infrastructure for the future.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/Mepa.jpg',  // Updated to match article 4's banner
      name: 'Divya Perera',
      subject: 'Empowering Coastal Conservation: Web-Based Mobile App for Marine Environment Protection Authority',
      link: '4',
      content: 'Healthcare systems adapt post-pandemic with innovation, resilience, technology, and collaboration.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/cricker_slc.jpg',  // Updated to match article 5's banner
      name: 'Divya Perera',
      subject: 'Streamlining Partnerships: Vendor Management Software for Sri Lanka Cricket',
      link: '5',
      content: 'Tourism balances growth, environment, community, culture, and economic sustainability.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    // {
    //   image: '/images/news/blog/travel-agency.jpg',  // Matches article 6's banner
    //   name: 'Divya Perera',
    //   subject: "A New Era for Domestic Cricket: ThinkCube Secures 10-Year Event Rights for SLC Men's and Women's Tournaments",
    //   link: '6',
    //   content: 'Modern water solutions boost efficiency, conserve resources, and ensure sustainability.',
    //   iconHref: 'https://www.oceanwatch.lk',
    //   button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
    //   button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
    //   button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    // },
    {
      image: '/images/news/kdu.jpg',  // Updated to match article 7's banner
      name: 'Divya Perera',
      subject: 'Hospital Information Management System: Digital Transformation at Kothalawala Defense University Hospital',
      link: '7',
      content: 'Telecom evolves with 5G, AI, IoT, sustainability, and innovation.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/api_stack.png',  // Matches article 8's banner
      name: 'Divya Perera',
      subject: 'E-Grama Niladari: Pioneering Digital Governance for Sri Lanka',
      link: '8',
      content: 'We harness cutting-edge technology to ensure sustainable farming and secure food systems.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/seo_pic.jpg',  // Updated to match article 9's banner
      name: 'Divya Perera',
      subject: 'Guru.lk: Revolutionizing Online Learning in Partnership with Dialog Axiata',
      link: '9',
      content: 'We harness cutting-edge technology to ensure sustainable farming and secure food systems.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/ui-ux-img.png',  // Updated to match article 10's banner
      name: 'Divya Perera',
      subject: 'ezBiz: Empowering SMEs with a Fully Fledged ERP Solution',
      link: '10',
      content: 'We harness cutting-edge technology to ensure sustainable farming and secure food systems.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/erp.jpeg',  // Updated to match article 11's banner
      name: 'Divya Perera',
      subject: 'ezBiz Lite: Mobile ERP for Micro and Small Businesses',
      link: '11',
      content: 'We harness cutting-edge technology to ensure sustainable farming and secure food systems.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
    {
      image: '/images/news/blog/digitalimg.jpg',  // Updated to match article 12's banner
      name: 'Divya Perera',
      subject: 'LeapX: Redefining Corporate Training and Education for the Digital Era',
      link: '12',
      content: 'We harness cutting-edge technology to ensure sustainable farming and secure food systems.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    },
        {
      image: '/images/company/lottery.jpg',  // Updated to match article 12's banner
      name: 'Divya Perera',
      subject: 'WIN WAY: Pioneering a Digital Lottery Revolution in Sri Lanka',
      link: '13',
      content: 'WIN WAY is Sri Lanka’s first fully digital national lottery platform, developed by Kapital Corp and Cubematrix to modernize access, boost transparency, and support national development.',
      iconHref: 'https://www.oceanwatch.lk',
      button1: { label: 'UI/UX', href: 'https://www.oceanwatch.lk', class: 'btn-1' },
      button2: { label: 'Research', href: 'https://www.oceanwatch.lk', class: 'btn-2' },
      button3: { label: 'Presentation', href: 'https://www.oceanwatch.lk', class: 'btn-3' },
    }
  ];

  // articles = {
  //   '1': {
  //     banner: '/images/news/blog/travel-agency.jpg',
  //     heading:
  //       "Game On: How Online & On-Demand Ticketing is Transforming Cricket for Sri Lanka's Fans",
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "Step into the future of cricket fandom with Sri Lanka Cricket and ThinkCube. Gone are the days of long queues, lost tickets, and last-minute scrambles. Since 2022, Sri Lanka Cricket has been reimagining the matchday experience with a state-of-the-art, end-to-end online ticketing platform, crafted by ThinkCube to put the power of cricket access directly into fans' hands.",
  //     contenttwo:
  //       "Imagine: You're on your way to a high-stakes international match. With just a few taps on your phone, you've secured your seat, received your e-ticket, and are ready to walk straight into the stadium, hassle-free. This is the new normal for Sri Lankan cricket fans, thanks to a digital ticketing revolution that's making the game more accessible, secure, and exciting than ever before.",
  //     contentthree:
  //       "The ThinkCube platform was built to meet the soaring expectations of modern fans, offering convenience, transparency, and top-tier security at every turn. Whether you're a die-hard local supporter or an international visitor, the system is designed to handle thousands of transactions with ease, ensuring you never miss a moment of the action. No more worries about lost or counterfeit passes; your e-ticket is your golden key to the stadium, with seamless authentication at every gate.",
  //     quote:
  //       "This platform is not just about selling tickets—it's about enhancing the fan experience and making cricket more accessible to everyone.",
  //     smallheading: '',
  //     smallcontent:
  //       "But the innovation doesn't stop at the gate. The platform delivers real-time inventory updates, dynamic pricing, and powerful analytics, giving Sri Lanka Cricket the insights it needs to optimize every event and respond to fan demand like never before. Multiple payment options and multilingual support mean that every fan, no matter where they're from, can enjoy a smooth and intuitive booking experience.",
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       "The impact is clear: From the Australia Tour to today's ongoing inbound series, ThinkCube's ticketing platform has become the backbone of Sri Lanka Cricket's matchday operations. It's not just about streamlining entries, it's about creating unforgettable experiences, fostering community, and bringing fans closer to the game they love.",
  //     headertwo: "ThinkCube's Commitment to Digital Innovation in Sports",
  //     imagesaas: '/images/news/blog/travel-agency.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       "At ThinkCube, we're passionate about pushing the boundaries of what's possible in sports technology. Our ongoing partnership with Sri Lanka Cricket is a testament to our dedication to innovation, reliability, and fan-centric design. By empowering Sri Lanka Cricket with a world-class ticketing platform, we're helping to make cricket more accessible, secure, and enjoyable for fans everywhere and setting a new standard for the future of sports event management.",
  //   },
  //   '2': {
  //     banner: '/images/news/blog/pagin-02.jpg',
  //     heading:
  //       "Unlocking Cricket's Digital Potential: Advanced Match Capturing and Analysis for SLC Domestic Matches",
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "Sri Lanka Cricket is stepping into a bold new era of performance and player development with the introduction of a cutting-edge match-capturing and analyzing software solution. Designed to revolutionize SLC's domestic cricket ecosystem, this comprehensive system empowers teams to record, analyze, and derive actionable insights from every match, setting a new standard for excellence in the sport.",
  //     contenttwo:
  //       "Imagine a world where every ball bowled, every shot played, and every fielding movement is captured in stunning detail, ready for in-depth analysis. That's the promise of this advanced software, which has been developed and handed over to SLC to support their domestic competition. With trained analysts at the helm, the platform delivers a wealth of data and visual insights, transforming raw match footage into a goldmine of information for coaches, selectors, and players alike.",
  //     contentthree:
  //       "The system is engineered to handle the unique demands of domestic cricket, offering seamless capturing, recording, and playback of matches. Advanced algorithms and intuitive interfaces allow analysts to tag key events, track player movements, and compile comprehensive performance reports. Whether it's identifying emerging talent, fine-tuning team strategies, or monitoring player workloads, the software provides the tools needed to elevate Sri Lanka's cricketing future.",
  //     quote:
  //       "This technology is a game-changer, giving us the ability to see and understand cricket like never before. It's about empowering our analysts, coaches, and players with the insights they need to succeed.",
  //     smallheading: '',
  //     smallcontent:
  //       "Beyond basic statistics, the software enables deep analysis of player performance, tactical trends, and match dynamics. Coaches can review every delivery, assess field placements, and track progress over time, making data-driven decisions that sharpen team performance. The system's robust reporting features ensure that every stakeholder, from selectors to support staff, has access to the information they need, when they need it.",
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       "As Sri Lanka Cricket continues to invest in technology-driven solutions, this match-capturing and analyzing platform stands as a testament to the board's commitment to innovation and excellence. By harnessing the power of data and digital tools, SLC is not only raising the bar for domestic cricket but also laying the foundation for sustained success on the international stage.",
  //     headertwo: "ThinkCube's Commitment to Cricket Innovation",
  //     imagesaas: '/images/news/blog/research-analysis_pic.jpg',
  //     imageby: 'Image courtesy of TechBridge Asia',
  //     contentfive:
  //       "At ThinkCube, we're proud to partner with Sri Lanka Cricket on this transformative journey. Our expertise in developing and deploying advanced digital solutions is helping SLC unlock new levels of performance, insight, and growth. Together, we're shaping the future of cricket; one match, one analysis, and one breakthrough at a time.",
  //   },
  //   '3': {
  //     banner: '/images/news/blog/pagin-03.jpg',
  //     heading:
  //       'Modernizing Event Access: System-Based Accreditation Services for Sri Lanka Cricket',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       'Sri Lanka Cricket is pioneering a new standard for event management with the introduction of a cutting-edge, system-based accreditation platform. Developed to streamline and secure access for all cricket events, this innovative solution is transforming how SLC gathers information, authenticates credentials, and manages accreditation for staff, officials, media, and VIPs.',
  //     contenttwo:
  //       "The new accreditation system is designed to simplify the often complex process of granting event access. Whether it's name tags, staff passes, or vehicle permits, the platform ensures that every credential is securely issued, scanned, and tracked in real time. Gone are the days of manual lists, lost badges, and security lapses; now, every entry is authenticated and approved digitally, offering peace of mind and operational efficiency.",
  //     contentthree:
  //       'At the heart of the system is its ability to gather comprehensive information from all stakeholders, enabling SLC to maintain a clear, up-to-date record of everyone on-site. The platform supports a range of accreditation types, from temporary event passes to long-term staff permits, and can be customized to meet the needs of any SLC event, whether a high-profile international match or a domestic tournament.',
  //     quote:
  //       "This system is redefining event security and convenience for Sri Lanka Cricket. It's about making sure the right people are in the right place, at the right time, with complete transparency and control.",
  //     smallheading: '',
  //     smallcontent:
  //       "Beyond security, the accreditation system offers powerful analytics and reporting tools. Event organizers can monitor entry patterns, identify trends, and make data-driven decisions to optimize operations. The platform's user-friendly interface ensures that both staff and attendees enjoy a smooth, hassle-free experience.",
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       "As Sri Lanka Cricket continues to host world-class events, this system-based accreditation service stands as a testament to the board's commitment to innovation and excellence. By leveraging digital technology, SLC is setting a new benchmark for event management, making cricket safer, more organized, and more enjoyable for everyone involved.",
  //     headertwo: "ThinkCube's Commitment to Event Excellence",
  //     imagesaas: '/images/news/blog/slc-unsplash.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       'ThinkCube is proud to support Sri Lanka Cricket with advanced digital solutions that elevate event management to new heights. Our ongoing partnership reflects a shared vision for innovation, security, and operational excellence. By empowering SLC with a world-class accreditation platform, ThinkCube is helping to make every cricket event a seamless, secure, and memorable experience.',
  //   },
  //   '4': {
  //     banner: '/images/news/blog/pagin-04.jpg',
  //     heading:
  //       'Empowering Coastal Conservation: Web-Based Mobile App for Marine Environment Protection Authority',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "Sri Lanka's stunning coastlines are set to receive a powerful boost in protection, thanks to a new web-based mobile application developed for the Marine Environment Protection Authority. This innovative system is transforming how beach cleanups and conservation events are organized, managed, and executed across the country.",
  //     contenttwo:
  //       "The application is designed to streamline every aspect of coastal conservation efforts. From booking cleanup events to recruiting volunteers and allocating resources, the platform offers an intuitive, all-in-one solution for environmental stewards and community members alike. With just a few taps on their smartphones or clicks on a web browser, users can join the movement to keep Sri Lanka's beaches pristine.",
  //     contentthree:
  //       'At the heart of the system is its seamless booking process, which allows event organizers to schedule cleanups, set locations, and invite participants with ease. Volunteers can register for events, track their involvement, and receive updates in real time, ensuring everyone stays connected and informed. The app also features robust resource allocation tools, enabling organizers to manage equipment, transportation, and other essentials efficiently.',
  //     quote:
  //       "This platform is more than just a tool; it's a catalyst for community action, making it easier than ever for people to come together and protect our precious marine environment.",
  //     smallheading: '',
  //     smallcontent:
  //       "Beyond event management, the application provides valuable data insights for the Marine Environment Protection Authority. Organizers can monitor participation rates, track cleanup results, and generate reports to measure the impact of their efforts. This data-driven approach empowers the Authority to make informed decisions, allocate resources where they're needed most, and inspire even greater community engagement.",
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       "As awareness of marine conservation grows, this web-based mobile application is poised to become a cornerstone of Sri Lanka's environmental protection strategy. By harnessing the power of digital technology, the Marine Environment Protection Authority is empowering citizens to take meaningful action, fostering a culture of responsibility, and safeguarding the natural beauty of Sri Lanka's shores for generations to come.",
  //     headertwo: "ThinkCube's Commitment to Environmental Innovation",
  //     imagesaas: '/images/news/blog/mobile_res.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       "ThinkCube is proud to support the Marine Environment Protection Authority with innovative digital solutions that drive community engagement and environmental stewardship. Our expertise in developing user-friendly platforms helps organizations empower citizens to take meaningful action for marine conservation, fostering a culture of responsibility and safeguarding Sri Lanka's natural beauty for future generations.",
  //   },
  //   '5': {
  //     banner: '/images/news/blog/pagin-05.jpg',
  //     heading: 'Streamlining Partnerships: Vendor Management Software for Sri Lanka Cricket',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       'Sri Lanka Cricket is embracing digital transformation in its procurement processes with the launch of a state-of-the-art Vendor Management System (VMS). This innovative platform is revolutionizing how suppliers connect with SLC, making registration and approval faster, more transparent, and entirely paperless.',
  //     contenttwo:
  //       "The new VMS allows businesses and individuals to register as suppliers directly through an online portal. From uploading required documents to selecting relevant categories and subcategories, every step of the process is streamlined for convenience and efficiency. The system guides users through each stage, whether they're registering for the first time or updating their information for the new year, ensuring that all records are accurate and up-to-date.",
  //     contentthree:
  //       "Once registered, suppliers can monitor their application status in real time, track payment history, and receive notifications about tenders and bids directly from SLC. The platform's intuitive dashboard provides a clear overview of each supplier's profile, application progress, and any updates required for approval. This level of transparency and automation not only saves time but also strengthens the partnership between SLC and its suppliers.",
  //     quote:
  //       "This system is more than just a registration tool; it's a gateway to building stronger, more trusted relationships with our valued suppliers. It ensures that only the best and most reliable partners join our network.",
  //     smallheading: '',
  //     smallcontent:
  //       'The VMS also supports SLC in maintaining high standards of quality, integrity, and professionalism. By centralizing supplier information and streamlining the approval process, the system enables SLC to manage its procurement operations with greater efficiency and confidence. Suppliers, in turn, benefit from a user-friendly experience, clear communication, and direct access to new business opportunities.',
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       'With the Vendor Management System, Sri Lanka Cricket is setting a new benchmark for supplier engagement in the sports industry, empowering both the organization and its partners to thrive in a digital-first world.',
  //     headertwo: "ThinkCube's Commitment to Digital Excellence",
  //     imagesaas: '/images/news/blog/pagin-05.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       'ThinkCube is proud to support Sri Lanka Cricket with innovative digital solutions that drive transparency, efficiency, and growth. Our partnership with SLC reflects a shared vision for excellence, helping to build a robust, future-ready supply chain that supports the success of cricket in Sri Lanka and beyond.',
  //   },
  //   '6': {
  //     banner: '/images/news/blog/pagin-06.jpg',
  //     heading:
  //       "A New Era for Domestic Cricket: ThinkCube Secures 10-Year Event Rights for SLC Men's and Women's Tournaments",
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "Sri Lanka Cricket is set to revolutionize its domestic cricket experience with a landmark 10-year event rights agreement covering all major men's and women's domestic tournaments. This comprehensive deal encompasses every aspect of tournament production, broadcasting, and commercial exploitation, ushering in a new chapter for cricket fans, players, and sponsors across the nation.",
  //     contenttwo:
  //       "Under this pioneering arrangement, ThinkCube will oversee all audio-visual (AV) production for both terrestrial and other broadcast platforms. This includes the creation and delivery of high-quality live coverage, highlights, and digital content that will bring the excitement of domestic cricket directly to fans' screens. A key highlight of the partnership is the launch of a newly formed free-to-air channel, developed by ThinkCube, dedicated exclusively to Sri Lanka Cricket's domestic competitions.",
  //     contentthree:
  //       'The new free-to-air channel will ensure that every match, from the Major Club Tournaments to the National Super League and beyond, is accessible to a broad audience across Sri Lanka. This initiative is designed to maximize viewership and fan engagement, making domestic cricket more visible and inclusive than ever before.',
  //     quote:
  //       "This partnership is about more than just broadcasting cricket; it's about building a vibrant, connected cricket community and showcasing the incredible talent within Sri Lanka's domestic game.",
  //     smallheading: '',
  //     smallcontent:
  //       "In addition to broadcast rights, the agreement includes the exploitation of ground branding and advertising opportunities. This opens new avenues for sponsors and partners to connect with cricket fans, both at the stadium and through digital and broadcast platforms. With robust commercial strategies and innovative branding placements, ThinkCube is set to elevate the profile and value of Sri Lanka's domestic cricket ecosystem.",
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       'The 10-year commitment reflects a shared vision between Sri Lanka Cricket and ThinkCube to invest in the long-term growth and sustainability of the sport. By combining world-class production, accessible broadcasting, and dynamic commercial exploitation, this partnership is poised to transform the way domestic cricket is experienced and enjoyed in Sri Lanka.',
  //     headertwo: "ThinkCube's Commitment to Cricket Innovation",
  //     imagesaas: '/images/news/blog/slcwomen.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       "ThinkCube is proud to partner with Sri Lanka Cricket on this transformative journey. Our expertise in digital and broadcast solutions is helping to unlock the full potential of domestic cricket, ensuring that every match, every player, and every fan is part of a thriving, future-ready cricket community. Together, we are redefining what's possible for Sri Lankan cricket, on and off the field.",
  //   },
  //   '7': {
  //     banner: '/images/news/blog/pagin-01.jpg',
  //     heading:
  //       'Hospital Information Management System: Digital Transformation at Kothalawala Defense University Hospital',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       'Kothalawala Defense University Hospital (UHKDU) has taken a giant leap forward in healthcare management with the launch of a comprehensive Hospital Information Management System (HIMS) developed by ThinkCube. This end-to-end digital solution is revolutionizing hospital operations, streamlining workflows, and ensuring seamless patient care at every stage.',
  //     contenttwo:
  //       'The new HIMS covers every aspect of hospital management, from patient admissions and electronic health records to lab integration, pharmacy management, billing, and reporting. By consolidating these functions into a single, unified platform, UHKDU is now able to manage its daily operations with unprecedented efficiency and accuracy. The system also supports robust data analytics, empowering hospital administrators with real-time insights to optimize resource allocation and improve patient outcomes.',
  //     contentthree:
  //       "ThinkCube's commitment to excellence extends beyond software. The project included the provision of essential hardware, servers, workstations, and networking equipment, ensuring that the hospital's digital infrastructure is reliable, secure, and ready for future growth. With advanced security measures and role-based access controls, patient data is protected at every step.",
  //     quote:
  //       "This isn't just an upgrade; it's a revolution in how hospitals operate. We're empowering UHKDU to focus on what matters most: exceptional patient care.",
  //     smallheading: '',
  //     smallcontent:
  //       'Patients, doctors, nurses, and administrators alike are experiencing the benefits of the new system. Patients enjoy faster admissions, reduced wait times, and centralized health records accessible across departments. Doctors have instant access to medical histories and diagnostic results, while administrators optimize inventory and reduce paperwork. Nurses benefit from streamlined workflows and medication tracking, all supported by the HIMS.',
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       'As UHKDU continues to embrace digital innovation, the hospital is setting a new standard for healthcare excellence in Sri Lanka. The HIMS not only enhances current operations but also lays the foundation for future advancements, such as AI-driven analytics and automated inventory management.',
  //     headertwo: "ThinkCube's Commitment to Healthcare Innovation",
  //     imagesaas: '/images/news/blog/travel-agency.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       "ThinkCube is proud to partner with Kothalawala Defense University Hospital in this transformative journey. Our holistic approach, combining cutting-edge software, hardware, and strategic support, ensures that institutions like UHKDU can deliver world-class care efficiently and sustainably. Together, we're building healthier futures through technology that serves both caregivers and patients.",
  //   },
  //   '8': {
  //     banner: '/images/news/blog/pexels-cottonbro.jpg',
  //     heading: 'E-Grama Niladari: Pioneering Digital Governance for Sri Lanka',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "Sri Lanka's grassroots governance is entering a new era with the launch of the E-Grama Niladari (EGN) platform, a fully digital solution designed to modernize and streamline the work of Grama Niladaris across the country. Developed and formally handed over to the Ministry of Digital Infrastructure and the Ministry of Home Affairs, this innovative platform is set to transform how local government services are delivered to citizens.",
  //     contenttwo:
  //       'The EGN platform digitizes the entire workflow of Grama Niladaris, enabling them to carry out their duties efficiently and transparently. From issuing certificates and processing requests to maintaining digital records and tracking service delivery, the system empowers local officials to serve their communities with unprecedented speed and accuracy. By replacing traditional paper-based processes with a secure, user-friendly digital interface, EGN reduces administrative burdens and minimizes delays for citizens seeking essential services.',
  //     contentthree:
  //       'A key feature of the EGN platform is its ability to provide real-time updates and centralized data management. This ensures that both ministries and local authorities have access to accurate, up-to-date information, facilitating better decision-making and resource allocation. The system also enhances accountability and transparency, as all transactions and service requests are logged and traceable within the platform.',
  //     quote:
  //       "E-Grama Niladari is more than just a digital tool; it's a catalyst for good governance, bringing efficiency, transparency, and trust to the heart of Sri Lanka's communities.",
  //     smallheading: '',
  //     smallcontent:
  //       'The benefits of EGN extend beyond administrative efficiency. Citizens can now access services from the comfort of their homes, reducing the need for multiple visits to government offices. The platform also supports multi-language interfaces, ensuring that services are accessible to all, regardless of linguistic background.',
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       'With the successful deployment of the EGN platform, Sri Lanka is setting a new standard for digital governance at the local level. The Ministry of Digital Infrastructure and the Ministry of Home Affairs are leading the way in leveraging technology to improve public service delivery and strengthen the bond between government and citizens.',
  //     headertwo: "ThinkCube's Commitment to Digital Transformation",
  //     imagesaas: '/images/news/blog/low_code.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       'ThinkCube is proud to support the Ministry of Digital Infrastructure and the Ministry of Home Affairs in this groundbreaking initiative. Our expertise in developing and deploying digital solutions is helping to build a more efficient, transparent, and citizen-centric government. Together, we are shaping the future of governance in Sri Lanka, one community at a time.',
  //   },
  //   '9': {
  //     banner: '/images/news/blog/business-person.jpg',
  //     heading: 'Guru.lk: Revolutionizing Online Learning in Partnership with Dialog Axiata',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "Sri Lanka's educational landscape was transformed in 2013 with the launch of Guru.lk, a pioneering e-learning platform developed in partnership with Dialog Axiata PLC. Designed to make learning accessible and convenient for everyone, Guru.lk has since become a cornerstone of digital education, empowering users to unlock knowledge anytime, anywhere, with just an internet connection.",
  //     contenttwo:
  //       "Guru.lk breaks down traditional barriers to education by offering a flexible, user-friendly platform that can be accessed with any internet package. Whether at home, at work, or on the go, learners can log in and access a wide array of courses tailored to their interests and needs. The platform's responsive design ensures a seamless experience across devices, from smartphones to desktop computers.",
  //     contentthree:
  //       'One of the standout features of Guru.lk is its effortless registration process. Users can sign up with just a few clicks using their Facebook, Twitter, LinkedIn, or Google accounts, eliminating the need for complex registration forms. Once registered, learners can explore a diverse catalog of courses, connect with instructors, and track their progress, all within a secure and engaging digital environment.',
  //     quote:
  //       "Guru.lk is more than just an e-learning platform; it's a gateway to lifelong learning, making education accessible, inclusive, and enjoyable for everyone.",
  //     smallheading: '',
  //     smallcontent:
  //       "The partnership between Guru.lk and Dialog Axiata PLC has played a crucial role in expanding access to digital education across Sri Lanka. By leveraging Dialog's robust network infrastructure and widespread reach, Guru.lk ensures that users from all corners of the country can benefit from high-quality online learning, regardless of their location or device.",
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       "Since its launch, Guru.lk has empowered thousands of learners to acquire new skills, advance their careers, and pursue their passions. The platform continues to evolve, introducing new courses, interactive features, and community-driven learning experiences to meet the changing needs of today's digital learners.",
  //     headertwo: "ThinkCube's Commitment to Digital Education",
  //     imagesaas: '/images/news/blog/business-person.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       'ThinkCube is proud to support initiatives like Guru.lk that drive digital transformation in education. Our expertise in developing innovative online platforms helps organizations like Dialog Axiata PLC deliver accessible, engaging, and impactful learning experiences to users across Sri Lanka. Together, we are building a brighter future through the power of digital education.',
  //   },
  //   '10': {
  //     banner: '/images/news/blog/research-analysis_pic.jpg',
  //     heading: 'ezBiz: Empowering SMEs with a Fully Fledged ERP Solution',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "In today's fast-paced business environment, small and medium enterprises (SMEs) need robust, scalable tools to manage their operations efficiently. ezBiz, developed by ThinkCube, is a comprehensive, cloud-based ERP solution designed specifically to meet the unique needs of SMEs, putting powerful business management capabilities within reach of every entrepreneur.",
  //     contenttwo:
  //       'ezBiz is a fully integrated suite of business applications, combining essential modules such as Sales, Purchasing, Inventory, Accounting, Customer Relationship Management (CRM), Jobs, and Point of Sale (POS). This all-in-one platform enables business owners to manage every aspect of their operations, from customer orders and supplier relationships to financial reporting and inventory control, all from a single, user-friendly interface.',
  //     contentthree:
  //       'The solution is built for flexibility and accessibility. With ezBiz, business owners and their teams can work from anywhere, at any time, using any device with an internet connection. Multi-location management, customizable user permissions, and automated reporting ensure that businesses can scale smoothly and make data-driven decisions with confidence. Advanced security features and reliable backup protocols keep business data safe and secure.',
  //     quote:
  //       "ezBiz is more than just software; it's a partner for growth, helping SMEs streamline operations, reduce manual work, and focus on what matters most: building a successful business.",
  //     smallheading: '',
  //     smallcontent:
  //       'ezBiz is available for purchase directly from ThinkCube, as well as through strategic partnerships with leading banks such as HNB and NDB, making it accessible to a wide range of SMEs at special or concessionary rates. The platform is designed for easy onboarding, with comprehensive support, training, and user manuals provided to ensure a smooth transition for new users.',
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       'With ezBiz, ThinkCube is setting a new standard for SME digital transformation in Sri Lanka and beyond. By equipping businesses with a fully fledged ERP solution, ThinkCube is empowering SMEs to compete, innovate, and thrive in an increasingly digital world.',
  //     headertwo: "ThinkCube's Commitment to SME Success",
  //     imagesaas: '/images/news/blog/seo.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       'ThinkCube is dedicated to supporting the growth and resilience of SMEs through innovative, user-centric digital solutions. With ezBiz, we are helping business owners across industries streamline their operations, gain valuable insights, and achieve sustainable growth, one smart decision at a time.',
  //   },
  //   '11': {
  //     banner: '/images/news/blog/blog-images.jpg',
  //     heading: 'ezBiz Lite: Mobile ERP for Micro and Small Businesses',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       'In the era of digital mobility, micro and small businesses need flexible, powerful tools that keep up with their fast-paced environments. ezBiz Lite, developed by ThinkCube, is a fully fledged ERP solution designed specifically for micro and small enterprises (SMEs), offering all the essential business management features, now optimized for mobile devices.',
  //     contenttwo:
  //       "ezBiz Lite empowers business owners to run their operations efficiently, anytime and anywhere. Whether you're on the shop floor, at a supplier meeting, or working remotely, ezBiz Lite puts the power of enterprise resource planning in the palm of your hand. The mobile version includes core modules such as Sales, Purchasing, Inventory, Accounting, and Customer Management, ensuring you can monitor and manage every aspect of your business with ease.",
  //     contentthree:
  //       'The intuitive mobile interface makes it simple to log sales, update inventory, track expenses, and generate reports, all in real time. With cloud-based data storage and synchronization, your business information is always up to date and accessible across devices. Advanced security features and automatic backups keep your data safe, while customizable dashboards provide quick insights into your business performance.',
  //     quote:
  //       "ezBiz Lite is more than just an app; it's your business partner on the go, helping micro and small enterprises stay agile, efficient, and competitive in today's mobile-first world.",
  //     smallheading: '',
  //     smallcontent:
  //       'ezBiz Lite is available for purchase and is designed for easy adoption by entrepreneurs who may not have extensive technical experience. Comprehensive support, user-friendly tutorials, and responsive customer service ensure a smooth onboarding process for all users.',
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       'By bringing a fully fledged ERP solution to mobile devices, ThinkCube is revolutionizing how micro and small businesses manage their operations. ezBiz Lite enables entrepreneurs to focus on growth, innovation, and customer satisfaction, wherever their business takes them.',
  //     headertwo: "ThinkCube's Commitment to Micro and Small Business Success",
  //     imagesaas: '/images/news/blog/seo_pic.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       'ThinkCube is dedicated to empowering micro and small businesses with innovative, accessible digital solutions. With ezBiz Lite, we are helping entrepreneurs across Sri Lanka and beyond streamline their operations, make smarter decisions, and achieve sustainable success, all from the convenience of their smartphones.',
  //   },
  //   '12': {
  //     banner: '/images/news/blog/api_stack.png',
  //     heading: 'LeapX: Redefining Corporate Training and Education for the Digital Era',
  //     avatar: '/images/news/articles/avatarone.png',
  //     author: {
  //       detailone: 'By ThinkCube',
  //       detailtwo: 'June, 2025',
  //     },
  //     contentone:
  //       "Imagine a workplace where every employee, new or seasoned, has instant access to learning that feels tailor-made for them. Where training isn't a chore, but a journey of discovery, collaboration, and growth. This isn't a distant dream; it's the reality that ThinkCube's LeapX e-learning platform is bringing to organizations across the globe.",
  //     contenttwo:
  //       "As digital transformation reshapes every industry, the need for continuous learning and upskilling has never been more urgent. Organizations are racing to equip their teams with the skills and adaptability required to stay ahead. Enter LeapX: a next-generation e-learning solution that's setting a new standard for corporate training and education.",
  //     contentthree:
  //       "At the heart of LeapX is its ability to adapt to any organization, any learning goal, and any workforce. Whether you're onboarding bright new talent, upskilling your current team, or rolling out specialized training, LeapX empowers you to create learning experiences that resonate. Its intuitive, user-friendly design makes it easy for administrators to manage courses, track progress, and keep content fresh and relevant.",
  //     quote:
  //       "LeapX is not just another e-learning tool; it's a catalyst for organizational growth, designed to help teams learn, adapt, and excel together in the digital era.",
  //     smallheading: '',
  //     smallcontent:
  //       'Customization is key with LeapX. Organizations can brand their learning environment and tailor content to their unique culture and objectives. Collaborative features like peer-to-peer learning, virtual classrooms, and real-time feedback foster a vibrant culture of knowledge sharing and continuous improvement. With LeapX, learning becomes a shared adventure, sparking innovation and driving teams to new heights.',
  //     quoteauthor: 'ThinkCube Leadership Team',
  //     contenfour:
  //       'As the world of work continues to evolve, LeapX is poised to become an essential tool for any organization committed to building a future-ready workforce. By harnessing the power of LeapX, companies can ensure their teams are not just prepared for change but are leading it.',
  //     headertwo: "ThinkCube's Commitment to Transforming Learning",
  //     imagesaas: '/images/news/blog/seo.jpg',
  //     imageby: 'Image courtesy of TechVision Labs',
  //     contentfive:
  //       "At ThinkCube, we're passionate about helping organizations unlock their full potential through digital innovation. With LeapX, we're reimagining what's possible in corporate training and education, delivering scalable, flexible, and user-centric solutions that empower teams to thrive in the digital age. Our mission is simple: to help you build a smarter, stronger, and more agile workforce, ready to take on the challenges of tomorrow.",
  //   },
  // };

  paginatedNewses = this.newses.slice(0, this.pageSize);

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.paginatedNewses = this.newses.slice(startIndex, endIndex);
  }
}
