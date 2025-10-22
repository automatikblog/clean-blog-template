import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  let categories = [
    ...new Set(
      posts
        .map(p => p.data.category)
        .filter(Boolean)
        .map(c => c.trim())
    ),
  ];

  // Se não houver nenhuma categoria, cria “Blog” padrão
  if (categories.length === 0) categories = ["Blog"];

  // Monta array de objetos com slug e nome
  const output = categories.map(c => ({
    name: c,
    slug: c.toLowerCase().replace(/\s+/g, "-"),
  }));

  return new Response(JSON.stringify(output), {
    headers: { "Content-Type": "application/json" },
  });
}
