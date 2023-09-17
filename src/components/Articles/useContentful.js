import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "boyvsga4zsb7",
    accessToken: "x9uEYiEDA34y5Ej-_fTsth04nJHoj3yGdutsg1pM2as",
    host: "cdn.contentful.com"
  });

  const getArticles = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "article",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching articles ${error}`);
    }
  };

  return { getArticles };
};

export default useContentful;