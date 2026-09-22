// 预览构建：README.md → (gh api /markdown) → 本地可截图的 HTML
// 用法：
//   node tools/build-preview.mjs body      # 生成 .preview/body.json（交给 gh api --input）
//   node tools/build-preview.mjs compose   # 读 .preview/body.html，拼成 .preview/preview.html
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, '.preview');
mkdirSync(OUT, { recursive: true });
const step = process.argv[2] ?? 'body';

if (step === 'body') {
  const text = readFileSync(resolve(ROOT, 'README.md'), 'utf8');
  // context 指向目标仓库，GitHub 才会按 profile README 的规则解析相对路径
  writeFileSync(resolve(OUT, 'body.json'), JSON.stringify({ text, mode: 'gfm', context: 'Bobbychina/Bobbychina' }), 'utf8');
  console.log('body.json written:', text.length, 'chars');
} else {
  // gh 返回的 <img src="./assets/x.svg"> 在本地预览里要指向 http 服务，才截得到图
  const html = readFileSync(resolve(OUT, 'body.html'), 'utf8').replaceAll('src="./assets/', 'src="http://127.0.0.1:5199/assets/');
  writeFileSync(resolve(OUT, 'preview.html'), `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">
<title>README preview</title><style>
  body{margin:0;background:#0d1117;color:#e6edf3;font:16px/1.6 -apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",system-ui,sans-serif}
  .markdown-body{max-width:1012px;margin:0 auto;padding:32px 24px 64px}
  h1,h2{border-bottom:1px solid #30363d;padding-bottom:.3em}
  a{color:#4493f8;text-decoration:none} a:hover{text-decoration:underline}
  code,pre{font-family:Consolas,"Courier New",monospace;background:#161b22;border-radius:6px}
  code{padding:.2em .4em;font-size:85%} pre{padding:16px;overflow:auto} pre code{background:none;padding:0}
  table{border-collapse:collapse;width:100%;display:block;overflow:auto}
  th,td{border:1px solid #30363d;padding:6px 13px} tr:nth-child(2n){background:#161b22}
  details{border:1px solid #30363d;border-radius:6px;padding:8px 16px;margin:16px 0}
  summary{cursor:pointer;font-weight:600}
  blockquote{border-left:.25em solid #30363d;color:#8b949e;margin:0;padding:0 1em}
  img{max-width:100%}
</style></head><body><div class="markdown-body">${html}</div></body></html>`, 'utf8');
  console.log('preview.html written:', html.length, 'chars of rendered html');
}
