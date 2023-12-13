export const isProduction = process.env.NODE_ENV === 'production';
export const isVercel = ['production', 'preview', 'development'].includes(
  process.env.VERCEL_ENV ?? ''
);
