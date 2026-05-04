import type { Metadata } from 'next';
import { CreativeTemplate } from '@/components/layout/CreativeTemplate';
import { djConfig } from '@/lib/configs/dj.config';

export const metadata: Metadata = {
  title: djConfig.meta.siteTitle,
  description: djConfig.meta.siteDescription,
};

export default function DJPage() {
  return <CreativeTemplate config={djConfig} />;
}
