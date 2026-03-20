import { MetadataRoute } from 'next';
import { STATIC_PARTS } from '@/lib/static-data';
import { COMPARISONS } from '@/lib/comparison-data';
import { slugify } from '@/lib/utils';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hvacexpert.com';

  // State routes
  const routes = [
    '',
    '/compatibility',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }));

  // Symptom routes
  const allSymptoms = new Set<string>();
  STATIC_PARTS.forEach(part => {
    part.symptoms.forEach(s => allSymptoms.add(s.description));
  });

  const symptomRoutes = Array.from(allSymptoms).map((description) => ({
    url: `${baseUrl}/symptom/${slugify(description)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Part routes
  const partRoutes = STATIC_PARTS.map((part) => ({
    url: `${baseUrl}/p/${part.part_number}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Comparison routes
  const comparisonRoutes = COMPARISONS.map((comp) => ({
    url: `${baseUrl}/compare/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...symptomRoutes, ...partRoutes, ...comparisonRoutes];
}
