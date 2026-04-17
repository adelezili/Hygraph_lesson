export const GET_BOOKS = `
  query GetBooks($locales: [Locale!]! = [en]) {
    books(locales: $locales) {
      id
      title
      slug
      author {
        authorName
      }
      genre {
        genreName
      }
      year
      description
      rating
    }
  }
`;

export const GET_HOMEPAGE = `
query GetHomepage {
  page(where: {slug: "home"}) {
    slug
    title
    pageSections {
      ... on FeaturedBooks {
        __typename
        id
        books(locales: [en]) {
          id
          title
          slug
          rating
          year
          description
          author {
            authorName
          }
          genre {
            genreName
          }
          editions {
            coverImage {
              url
            }
          }
        }
      }
      ... on Section {
        __typename
        id
        description
        title
        backgroundImage {
          url
        }
        button {
          label
          url
          backgroundColor {
            hex
          }
        }
        variant {
          variantName
        }
      }
    }
  }
}
`;

export const GET_BOOK = `
query GetBook($slug: String!, $locales: [Locale!]! = [en]) {
  book(where: { slug: $slug }, locales: $locales) {
    id
    title
    slug
    author {
      authorName
    }
    genre {
      genreName
    }
    year
    description
    rating
    editions {
      format
      pageCount
      duration
      coverImage {
        url
      }
      availability
    }
    reviews
  }
}
`;

export const GET_LAYOUT = `
query MyQuery {
  generalLayouts {
    footerMenu {
      id
      title
      navigationLinks {
        label
        id
        url
      }
    }
    headerMenu {
      id
      title
      navigationLinks {
        id
        label
        url
      }
    }
    contactEmail
    siteTitle
    siteDescription
    logo {url}
  }
}
`;
