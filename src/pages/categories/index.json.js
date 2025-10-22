import fs from "fs";
import path from "path";

export async function GET() {
  // Caminho absoluto até o arquivo JSON de categorias
  const filePath = path.resolve("src/data/categories.json");

  // Lê o conteúdo do arquivo
  const data = fs.readFileSync(filePath, "utf-8");

  // Converte o conteúdo em JSON
  const categories = JSON.parse(data);

  // Retorna a resposta em formato JSON (pra ser consumida no menu ou no site)
  return new Response(JSON.stringify(categories), {
    headers: { "Content-Type": "application/json" },
  });
}
