type uploadMiddlewareProps = {
  file: File;
  onSuccess: (file: File) => void;
  onError: (error: string) => void;
};

export async function uploadMiddleware({
  file,
  onSuccess,
  onError,
}: uploadMiddlewareProps) {
  try {
    const { default: imageCompression } = await import(
      "browser-image-compression"
    );
    const compressionOptions = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      initialQuality: 0.8,
      fileType: "image/jpeg",
      libURL: "scripts/browser-image-compression.js",
    };
    const compressedFile = await imageCompression(file, compressionOptions);
    onSuccess(compressedFile);
  } catch (err) {
    console.error(err);
    onError(err instanceof Error ? err.message : "Unknown Error");
  }
}
