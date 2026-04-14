export const GET_BOOKS = `
  query MyQuery {
    books {
      bookData {
        author {
          authorName
          birthYear
          country
        }
        genres {
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
  }
`;

export const GET_HOMEPAGE = `
query MyQuery {
  page(where: {slug: "home"}) {
    slug
    title
    pageSections {
      ... on FeaturedBooks {
        id
        books {
          id
          bookData {
            coverImage {
              url
            }
            author {
              authorName
            }
            title
            rating
          }
        }
      }
      ... on Section {
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
      navigationLinks {
        id
        label
        url
      }
    }
    contactEmail
  }
}
`;
