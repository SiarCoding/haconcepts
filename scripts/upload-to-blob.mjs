import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { put } from '@vercel/blob';

async function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.error('Usage: node scripts/upload-to-blob.mjs <file1> <file2> ...');
    process.exit(1);
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('Error: BLOB_READ_WRITE_TOKEN is not set. Run "vercel env pull" first.');
    process.exit(1);
  }

  const results = [];
  for (const filePath of files) {
    try {
      const data = await readFile(filePath);
      const name = basename(filePath);
      const blob = await put(name, new Blob([data]), { access: 'public' });
      results.push({ filePath, url: blob.url });
    } catch (err) {
      console.error(`Failed to upload ${filePath}:`, err.message);
      process.exitCode = 1;
    }
  }

  for (const r of results) {
    console.log(`${r.filePath} -> ${r.url}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}); 