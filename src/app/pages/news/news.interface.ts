export interface news {
    image: string;
    name: string;
    subject: string;
    link: string;
    content: string;
    iconHref: string;
    button1: NewsButton;
    button2: NewsButton;
    button3: NewsButton;
}

export interface NewsButton {
    label: string;
    href: string;
    class: string;
}
