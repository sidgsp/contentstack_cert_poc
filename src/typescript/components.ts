import { BlogPostRes, Img, Link, Page } from "./pages";

export type HeroBanner = {
  banner_title: string;
  bg_color: string;
  banner_image?: Img;
  text_color?: string;
  call_to_action?: Link;
  banner_description?: string;
  $: HeroBanner;
};

export type Section = {
  image: Img;
  title_h2: string;
  description: string;
  call_to_action: Link;
  image_alignment: string;
  $: Section;
};

export type Buckets = {
  icon: Img;
  title_h3: string;
  description: string;
  call_to_action: Link;
  $: Buckets;
};

export type SectionWithBuckets = {
  buckets: Buckets[];
  title_h2: string;
  description: string;
  bucket_tabular: boolean;
  $: SectionWithBuckets;
};

export type FromBlog = {
  $:FromBlog
  title_h2: string;
  view_articles: Link;
  featured_blogs: {
    $: {
      url: string;
      uid: string;
      body: string;
      date: string;
      title: string;
      featured_image: Img;
    };
    url: string;
    uid: string;
    body: string;
    date: string;
    title: string;
    featured_image: Img;
  }[];
};

export type SectionWithCards = {
  cards: {
    title_h3: string;
    description: string;
    call_to_action: Link;
    $: {
      title_h3: string;
      description: string;
      call_to_action: Link;
    };
  }[];
};

export type OurTeam = {
  $: OurTeam;
  title_h2: string;
  description: string;
  employees: {
    $:{
      image: Img;
      name: string;
      designation: string;
    }
    image: Img;
    name: string;
    designation: string;
  }[];
};

export type SectionWithHtmlCode = {
  $: SectionWithHtmlCode;
  title: string;
  html_code: string;
  description: string;
  html_code_alignment: string;
};

export type Widget = {
    title_h2: string;
    type: string;
    $: {
      title_h2: string;
      type: string;
    };
};

export type Seo = {
  property: string;
  content: string;
  keywords: string;
};

export type EntryProps = {
  blogPost?: BlogPostRes[];
  page?: Page[];
};

export type Hero = {
  $: Hero;
  title: string;
  columns: HeroCard[];
}

export type HeroCard = {
  $: HeroCard,
  title: string;
  image: Img;
  cta_label: string;
  cta_link: string;
}

export type SubBanner = {
  $: SubBanner;
  title: string;
  image: Img;
  cta_label: string;
  cta_link: string;
}

export type CategoryBanner = {
  $: CategoryBanner;
  title: string;
  categories: CategoryLink[];
}

export type CategoryLink = {
  $: CategoryLink;
  title: string;
  cta_label: string;
  cta_link: string;
}

export type Carousel = {
  $: Carousel;
  title: string;
  label: string;
  slides: CarouselSlide[];
}

export type CarouselSlide = {
  $: CarouselSlide;
  title: string;
  image: Img;
  label: string;
  link: string;
  original_price: number;
  markdown_price: number;
}

export type TileArray = {
  $: TileArray;
  title: string;
  tiles: Tile[];
}

export type Tile = {
  $: Tile;
  title: string;
  image: Img;
  cta_link: string;
  cta_blue_label: string;
  cta_red_label: string;
  logo: Img;
  footer: string;
}
