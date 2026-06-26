import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { getSermon } from "@/sanity/lib/queries";

function getYouTubeEmbedUrl(youtubeUrl?: string) {
  if (!youtubeUrl || youtubeUrl === "#") {
    return null;
  }

  try {
    const url = new URL(youtubeUrl);
    const host = url.hostname.replace(/^www\./, "");
    let videoId = "";

    if (host === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (host.endsWith("youtube.com")) {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v") || "";
      } else {
        const [, type, id] = url.pathname.split("/");
        if (["embed", "shorts", "live"].includes(type)) {
          videoId = id || "";
        }
      }
    }

    const cleanVideoId = videoId.match(/^[a-zA-Z0-9_-]+/)?.[0];
    return cleanVideoId ? `https://www.youtube.com/embed/${cleanVideoId}` : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sermon = await getSermon(slug);
  return { title: sermon.title, description: sermon.description };
}

export default async function SermonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sermon = await getSermon(slug);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(sermon.youtubeUrl);

  return (
    <>
      <PageHero eyebrow={sermon.series} title={sermon.title} text={sermon.description} />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={`Mensagem ${sermon.title}`}
              className="aspect-video w-full rounded-lg bg-black shadow-soft"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="image-wash grid aspect-video place-items-center rounded-lg text-center text-white shadow-soft">
              <div>
                <p className="font-bold">Player do YouTube</p>
                <p className="mt-2 text-sm text-vine-50">Cadastre o link do vídeo no campo “Link do YouTube” no CMS.</p>
              </div>
            </div>
          )}
          <aside className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-vine-900">Detalhes</h2>
            <ul className="mt-5 grid gap-3 text-stonewarm-700">
              <li>Pregador: {sermon.speaker}</li>
              <li>Data: {sermon.date}</li>
              <li>Campus: {sermon.campus}</li>
              <li>Série: {sermon.series}</li>
            </ul>
            {sermon.youtubeUrl && sermon.youtubeUrl !== "#" ? (
              <div className="mt-6">
                <ButtonLink href={sermon.youtubeUrl} variant="secondary">
                  Assistir no YouTube
                </ButtonLink>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </>
  );
}
