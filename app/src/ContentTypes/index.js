import StandardLayout from './StandardLayout';
import Single from './Single';

export const InitializeContent = content => {
  let types = new Set(content.meta.is);

  if (types.has('StandardLayout')) return new StandardLayout(content, false);
  if (types.has('Single')) return new Single(content, false);

  return content;
}