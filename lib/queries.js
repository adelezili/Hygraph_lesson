export const GET_BOOKS = `
  query MyQuery {
    books {
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
      coverImage {
        url
      }
    }
  }
`;

export const GET_HOMEPAGE = `
query MyQuery {
  page(where: {slug: "home"}) {
    slug
    title
    pageSections {
      ... on FeaturedBooks {
        __typename
        id
        books {
          id
          title
          slug
          rating
          year
          description
          coverImage {
            url
          }
          author {
            authorName
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
      }
    }
  }
}
`;

export const GET_BOOK = `
query MyQuery($slug: String!) {
  book(where: { slug: $slug }) {
    id
    title
    slug
    author {
      authorName
    }
    year
    description
    rating
    coverImage {
      url
    }
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
