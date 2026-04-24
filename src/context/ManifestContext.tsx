import { createContext } from 'react';
import type { RawManifest } from './types.ts';

// @ts-expect-error [can't be fucked to make this non-nullable properly]
export const ManifestContext = createContext<RawManifest>({});
