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
    sections {
      ... on FeaturedBooks {
        id
        books {
          bookData {
            rating
            title
            year
            coverImage {
              id
            }
            author {
              authorName
            }
          }
        }
      }
    }
  }
}
`;
