import { useEffect } from "react";

interface Meta {
  title?: string;
  description?: string;
}

function setMetaTag(name: string, content: string, attr: "name" | "property" = "name") {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function usePageMeta({ title, description }: Meta) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag("og:title", title, "property");
      setMetaTag("twitter:title", title);
    }
    if (description) {
      setMetaTag("description", description);
      setMetaTag("og:description", description, "property");
      setMetaTag("twitter:description", description);
    }
  }, [title, description]);
}
