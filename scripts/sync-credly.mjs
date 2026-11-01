// Snapshot public Credly badges into src/data/certifications.json and src/assets/badges/.
// Usage: npm run sync:credly
import { writeFile, mkdir } from 'node:fs/promises';

const USER = 'swadhin';
const res = await fetch(`https://www.credly.com/users/${USER}/badges.json`, {
  headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0' },
});
if (!res.ok) throw new Error(`Credly responded ${res.status}`);
const { data } = await res.json();

// Only formal certifications; skip records of achievement, hackathons, etc.
const isCert = (b) => /^SAP Certified/.test(b.badge_template.name) || /^CKAD/.test(b.badge_template.name);

const wanted = data.filter(isCert);
if (wanted.length === 0) throw new Error('No certifications returned; refusing to overwrite the snapshot');

await mkdir('src/assets/badges', { recursive: true });
const certs = [];
for (const b of wanted) {
  const img = await fetch(b.image_url);
  if (!img.ok) throw new Error(`Image ${b.image_url} responded ${img.status}`);
  await writeFile(`src/assets/badges/${b.id}.png`, Buffer.from(await img.arrayBuffer()));
  certs.push({
    id: b.id,
    name: b.badge_template.name.replace(/^SAP Certified - /, ''),
    issuer: b.issuer.entities[0].entity.name,
    issued: b.issued_at_date,
    expires: b.expires_at_date ?? null,
    url: `https://www.credly.com/badges/${b.id}`,
  });
}
certs.sort((a, b) => b.issued.localeCompare(a.issued));
await writeFile('src/data/certifications.json', JSON.stringify(certs, null, 2) + '\n');
console.log(`Saved ${certs.length} certifications`);
