export async function fetchHygraph(query, variables = {}) {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Hygraph request failed: ${response.status}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    console.error("Hygraph errors:", JSON.stringify(errors, null, 2));
    throw new Error(errors.map((e) => e.message).join(", "));
  }

  return data;
}
