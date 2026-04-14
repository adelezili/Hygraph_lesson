export async function fetchHygraph<T>(
  query: string,
  variables: Record<string, unknown> = {},
  fetchOptions: { tags?: string[] } = {}
): Promise<T> {
  const { tags } = fetchOptions;

  const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
    next: { tags },
  });

  if (!response.ok) {
    throw new Error(`Hygraph request failed: ${response.status}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    console.error("Hygraph errors:", JSON.stringify(errors, null, 2));
    throw new Error(
      errors.map((e: { message: string }) => e.message).join(", ")
    );
  }

  return data as T;
}
