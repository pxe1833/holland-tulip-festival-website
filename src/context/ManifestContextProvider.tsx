import { type ReactNode, useEffect, useState } from 'react';
import { useBoolean } from 'usehooks-ts';
import { ManifestContext } from './ManifestContext';

export default function ManifestContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    value: loading,
    setTrue: startLoading,
    setFalse: stopLoading,
  } = useBoolean(false);
  const [manifestData, setManifestData] = useState(null);

  useEffect(() => {
    const cb = async () => {
      const manifetch = await fetch(
        'https://storage.googleapis.com/tulip-festival-public-storage-dev/2026/manifest_2026_v2.json'
      );
      const manifestJSON = await manifetch.json();

      setManifestData(manifestJSON);

      stopLoading();
    };

    startLoading();

    cb();
  }, [startLoading, stopLoading, setManifestData]);

  return (
    // @ts-expect-error [can't be fucked to make this non-nullable properly]
    <ManifestContext.Provider value={manifestData}>
      {loading ? (
        <>Loading...</>
      ) : manifestData ? (
        <>{children}</>
      ) : (
        <>A Terminal Error Has Occurred</>
      )}
    </ManifestContext.Provider>
  );
}
