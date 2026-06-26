export type ImageValue = {
  url?: string;
  alt?: string;
};

export type Campus = {
  title: string;
  slug: string;
  city: string;
  state: string;
  address: string;
  serviceTimes: string[];
  leader: string;
  whatsapp: string;
  email: string;
  mapUrl: string;
  intro: string;
  image?: ImageValue;
  leaderPhoto?: ImageValue;
  leaderBio?: string;
  leaderInstagram?: string;
  leaderInstagram2?: string;
};

export type EventItem = {
  title: string;
  slug: string;
  date: string;
  time: string;
  location: string;
  campus: string;
  description: string;
  registrationUrl: string;
  image?: ImageValue;
};

export type SocialProject = {
  title: string;
  slug: string;
  description: string;
  objective: string;
  audience: string;
  howToHelp: string;
  leader: string;
  donationUrl: string;
  image?: ImageValue;
};

export type Sermon = {
  title: string;
  slug: string;
  speaker: string;
  date: string;
  series: string;
  campus: string;
  youtubeUrl: string;
  description: string;
  image?: ImageValue;
};

export type Ministry = {
  title: string;
  slug: string;
  description: string;
  audience: string;
  leader: string;
  image?: ImageValue;
};

export type SiteSettings = {
  title: string;
  description: string;
  phone: string;
  email: string;
  instagram: string;
  youtube: string;
  liveUrl: string;
  givingUrl: string;
};

export type PageContent = {
  pageKey: string;
  headline?: string;
  subheadline?: string;
  seniorLeaderName?: string;
  seniorLeaderPhoto?: ImageValue;
  seniorLeaderBio?: string;
  seniorLeaderInstagram?: string;
  seniorLeaderInstagram2?: string;
};
