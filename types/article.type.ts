export class ArticleResult {
    id: string;
    user_created: {
      first_name: string;
      last_name: string;
    };
    type: string;
    slug: string;
    category: {
      translations: {
        title: string;
      };
    };
    translations: {
      title: string;
    };
    date_created: string;
  }

  export class Posters{
    translations:{}[]
  }