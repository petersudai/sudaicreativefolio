import type { Metadata } from 'next';
import { CreativeTemplate } from '@/components/layout/CreativeTemplate';
import { photographerConfig } from '@/lib/configs/photographer.config';

export const metadata: Metadata = {
  title: photographerConfig.meta.siteTitle,
  description: photographerConfig.meta.siteDescription,
};

export default function PhotographerPage() {
  return <CreativeTemplate config={photographerConfig} />;
}
