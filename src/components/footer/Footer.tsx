export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full py-8 text-[12px]">
      <div className="flex flex-col justify-center sm:flex-row mb-4">
        <div className="flex justify-center items-center sm:pr-6">
          <img
            className="object-contain max-h-30 max-w-30"
            src="https://dwyq4sa1lz55y.cloudfront.net/uploads/sites/233/2019/03/ki-logo-1024x1024.png"
            alt="Kiwanis Logo"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="object-contain max-h-30 max-w-60"
            src="https://storage.googleapis.com/tulip-festival-public-storage-dev/tulip_fest_logo_wide_black.png"
            alt="Holland Tulip Festival Logo"
          />
        </div>
      </div>
      <div className="text-black">Copyright © 2026 Holland Tulip Festival</div>
    </div>
  );
}
