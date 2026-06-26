import { campuses, events, ministries, sermons, socialProjects } from "@/lib/site";
import type { Campus, EventItem, Ministry, PageContent, Sermon, SocialProject } from "@/lib/types";
import { sanityFetch } from "./client";

const imageProjection = `image{alt, "url": asset->url}`;

type CampusFromSanity = Omit<Campus, "serviceTimes"> & {
  serviceTimes?: Array<string | { time?: string } | null> | null;
};

function normalizeCampus(campus: CampusFromSanity): Campus {
  return {
    ...campus,
    serviceTimes:
      campus.serviceTimes
        ?.map((item) => (typeof item === "string" ? item : item?.time))
        .filter((item): item is string => Boolean(item)) || []
  };
}

export async function getCampuses() {
  const data = await sanityFetch<CampusFromSanity[]>(
    `*[_type == "campus" && published == true] | order(title asc) {
      title, "slug": slug.current, city, state, address, serviceTimes, leader, leaderBio, leaderInstagram, leaderInstagram2,
      ${imageProjection}, leaderPhoto{alt, "url": asset->url}, whatsapp, email, mapUrl, intro
    }`,
    {},
    campuses
  );

  return data.map(normalizeCampus);
}

export async function getPageContent(pageKey: string, fallback: PageContent) {
  return sanityFetch<PageContent>(
    `*[_type == "pageContent" && pageKey == $pageKey][0] {
      pageKey, headline, subheadline
    }`,
    { pageKey },
    fallback
  );
}

export async function getLeaderPageContent(fallback: PageContent) {
  return sanityFetch<PageContent>(
    `coalesce(
      *[_type == "leaderPage" && _id == "leaderPage"][0] {
        "pageKey": "lideres", headline, subheadline, seniorLeaderName, seniorLeaderBio, seniorLeaderInstagram,
        seniorLeaderInstagram2, seniorLeaderPhoto{alt, "url": asset->url}
      },
      *[_type == "pageContent" && pageKey == "lideres"][0] {
        pageKey, headline, subheadline, seniorLeaderName, seniorLeaderBio, seniorLeaderInstagram,
        seniorLeaderInstagram2, seniorLeaderPhoto{alt, "url": asset->url}
      }
    )`,
    {},
    fallback
  );
}

export async function getCampus(slug: string) {
  const fallback = campuses.find((item) => item.slug === slug) || campuses[0];
  const data = await sanityFetch<CampusFromSanity>(
    `*[_type == "campus" && slug.current == $slug][0] {
      title, "slug": slug.current, city, state, address, serviceTimes, leader, leaderBio, leaderInstagram, leaderInstagram2,
      ${imageProjection}, leaderPhoto{alt, "url": asset->url}, whatsapp, email, mapUrl, intro
    }`,
    { slug },
    fallback
  );

  return normalizeCampus(data);
}

export async function getEvents() {
  return sanityFetch<EventItem[]>(
    `*[_type == "event" && status == "published"] | order(date asc) {
      title, "slug": slug.current, date, time, location, campus, description, registrationUrl, ${imageProjection}
    }`,
    {},
    events
  );
}

export async function getEvent(slug: string) {
  const fallback = events.find((item) => item.slug === slug) || events[0];
  return sanityFetch<EventItem>(
    `*[_type == "event" && slug.current == $slug][0] {
      title, "slug": slug.current, date, time, location, campus, description, registrationUrl, ${imageProjection}
    }`,
    { slug },
    fallback
  );
}

export async function getSocialProjects() {
  return sanityFetch<SocialProject[]>(
    `*[_type == "socialProject" && published == true] | order(title asc) {
      title, "slug": slug.current, description, objective, audience, howToHelp, leader, donationUrl, ${imageProjection}
    }`,
    {},
    socialProjects
  );
}

export async function getSocialProject(slug: string) {
  const fallback = socialProjects.find((item) => item.slug === slug) || socialProjects[0];
  return sanityFetch<SocialProject>(
    `*[_type == "socialProject" && slug.current == $slug][0] {
      title, "slug": slug.current, description, objective, audience, howToHelp, leader, donationUrl, ${imageProjection}
    }`,
    { slug },
    fallback
  );
}

export async function getSermons() {
  return sanityFetch<Sermon[]>(
    `*[_type == "sermon" && published == true] | order(date desc) {
      title, "slug": slug.current, speaker, date, series, campus, youtubeUrl, description, ${imageProjection}
    }`,
    {},
    sermons
  );
}

export async function getSermon(slug: string) {
  const fallback = sermons.find((item) => item.slug === slug) || sermons[0];
  return sanityFetch<Sermon>(
    `*[_type == "sermon" && slug.current == $slug][0] {
      title, "slug": slug.current, speaker, date, series, campus, youtubeUrl, description, ${imageProjection}
    }`,
    { slug },
    fallback
  );
}

export async function getMinistries() {
  return sanityFetch<Ministry[]>(
    `*[_type == "ministry" && published == true] | order(title asc) {
      title, "slug": slug.current, description, audience, leader, ${imageProjection}
    }`,
    {},
    ministries
  );
}

export async function getMinistry(slug: string) {
  const fallback = ministries.find((item) => item.slug === slug) || ministries[0];
  return sanityFetch<Ministry>(
    `*[_type == "ministry" && slug.current == $slug][0] {
      title, "slug": slug.current, description, audience, leader, ${imageProjection}
    }`,
    { slug },
    fallback
  );
}
