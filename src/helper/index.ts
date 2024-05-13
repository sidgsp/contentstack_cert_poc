import { getEntry, getEntryByUrl } from "../sdk/entry";
import { addEditableTags } from "@contentstack/utils";
import { FooterRes, HeaderRes } from "../typescript/response";
import { BlogPostRes, Page, POCPage } from "../typescript/pages";

const liveEdit = process.env.REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS === "true";

export const getHeaderRes = async (): Promise<HeaderRes> => {
  const response = (await getEntry({
    contentTypeUid: "header",
    referenceFieldPath: ["navigation_menu.page_reference"],
    jsonRtePath: ["notification_bar.announcement_text"],
  })) as HeaderRes[][];
  liveEdit && addEditableTags(response[0][0], "header", true);
  return response[0][0];
};

export const getFooterRes = async (): Promise<FooterRes> => {
  const response = (await getEntry({
    contentTypeUid: "footer",
    jsonRtePath: ["copyright"],
    referenceFieldPath: undefined,
  })) as FooterRes[][];
  liveEdit && addEditableTags(response[0][0], "footer", true);
  return response[0][0];
};

export const getAllEntries = async (): Promise<Page[]> => {
  const response = (await getEntry({
    contentTypeUid: "page",
    jsonRtePath: undefined,
    referenceFieldPath: undefined,
  })) as Page[][];
  liveEdit &&
    response[0].forEach((entry) => addEditableTags(entry, "blog_post", true));
  return response[0];
};

export const getPageRes = async (entryUrl: string): Promise<Page> => {
  const response = (await getEntryByUrl({
    contentTypeUid: "page",
    entryUrl,
    referenceFieldPath: ["page_components.from_blog.featured_blogs"],
    jsonRtePath: [
      "page_components.from_blog.featured_blogs.body",
      "page_components.section_with_buckets.buckets.description",
      "page_components.section_with_html_code.description",
    ],
  })) as Page[];
  liveEdit && addEditableTags(response[0], "page", true);
  return response[0];
};

export const getBlogListRes = async (): Promise<{
  archivedBlogs: BlogPostRes[];
  recentBlogs: BlogPostRes[];
}> => {
  const response = (await getEntry({
    contentTypeUid: "blog_post",
    referenceFieldPath: ["author", "related_post"],
    jsonRtePath: ["body"],
  })) as BlogPostRes[][];
  liveEdit &&
    response[0].forEach((entry) => addEditableTags(entry, "blog_post", true));
  const archivedBlogs = [] as BlogPostRes[];
  const recentBlogs = [] as BlogPostRes[];

  response[0].forEach((blogs) => {
    if (blogs.is_archived) {
      archivedBlogs.push(blogs);
    } else {
      recentBlogs.push(blogs);
    }
  });
  return { archivedBlogs, recentBlogs };
};

export const getBlogPostRes = async (
  entryUrl: string
): Promise<BlogPostRes> => {
  const response = (await getEntryByUrl({
    contentTypeUid: "blog_post",
    entryUrl,
    referenceFieldPath: ["author", "related_post"],
    jsonRtePath: ["body", "related_post.body"],
  })) as BlogPostRes[];
  liveEdit && addEditableTags(response[0], "blog_post", true);
  return response[0];
};

export const getPOCPage = async () => {
  const response = (await getEntry({
    contentTypeUid: "poc_page",
    jsonRtePath: undefined,
    referenceFieldPath: ["sections", "sections.columns", "sections.categories", "sections.slides", "sections.tiles"],
  }));
  liveEdit &&
    // @ts-ignore: poc
    response[0].forEach((entry) => entry.sections.map((section) => {
      addEditableTags(section, section._content_type_uid, true);
      switch (section._content_type_uid) {
        case "hero":
          // @ts-ignore: poc
          section.columns.map((column) => addEditableTags(column, column._content_type_uid, true));
          break;
        case "carousel":
          // @ts-ignore: poc
          section.slides.map((slide) => addEditableTags(slide, slide._content_type_uid, true));
          break;
        case "tile_array":
          // @ts-ignore: poc
          section.tiles.map((tile) => addEditableTags(tile, tile._content_type_uid, true));
          break;
        default:
      }

    }));
  // @ts-ignore: poc
  return response[0][0];
};

export const getCertPage = async (entryUrl: string) => {
  const response = (await getEntryByUrl({
    contentTypeUid: "certification_page",
    entryUrl,
    referenceFieldPath: ["sections.blogs.blog"],
    jsonRtePath: ["sections.text_article.text"],
  }));


  // @ts-ignore: poc
  return response[0];
}

export const getBlogPage = async (entryUrl: string) => {
  const response = (await getEntryByUrl({
    contentTypeUid: "blog",
    entryUrl,
    referenceFieldPath: undefined,
    jsonRtePath: ["blog_section.text", "blog_section.highlight"],
  }));

  // @ts-ignore: poc
  return response[0];
}
