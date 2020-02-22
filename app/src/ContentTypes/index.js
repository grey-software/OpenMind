import StandardLayout from './StandardLayout';
import Single from './Single';
import Page from './Page';

export const InitializeContent = content => {
  let types = new Set(content.meta.is);

  if (types.has('StandardLayout')) return new StandardLayout(content, false);
  if (types.has('Single')) return new Single(content, false);
  if (types.has('Page')) return new Page(content, false);

  return content;
}