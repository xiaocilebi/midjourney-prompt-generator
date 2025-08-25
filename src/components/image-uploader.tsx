"use client";
import { memo, useRef, type ReactNode } from "react";
import { toast } from "sonner";
import { uploadMiddleware } from "@/utils/upload";

type UploaderProps = {
  children: ReactNode;
  onMessage?: (text: string) => void;
  onStart: () => void;
  onFinish: (text: string) => void;
};

function Uploader({ children, onMessage, onStart, onFinish }: UploaderProps) {
  const attachmentRef = useRef<HTMLInputElement>(null);

  async function handleFileUpload(files: FileList | null) {
    if (!files) return;

    onStart();
    await uploadMiddleware({
      file: files[0],
      onSuccess: async (newFile) => {
        const formData = new FormData();
        formData.append("file", newFile);

        const response = await fetch("/api/vision", {
          method: "POST",
          body: formData,
        });

        if (response.ok && response.body) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder("utf-8");
          let text = "";

          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              onFinish(text);
              break;
            }

            const chunk = decoder.decode(value, { stream: true });
            text += chunk;
            if (onMessage) onMessage(text);
          }
        }
      },
      onError: (error) => {
        toast.error(error);
      },
    });

    if (attachmentRef.current?.value) {
      attachmentRef.current.value = "";
    }
  }

  return (
    <div onClick={() => attachmentRef.current?.click()}>
      <input
        ref={attachmentRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(ev) => handleFileUpload(ev.target.files)}
      />
      {children}
    </div>
  );
}

export default memo(Uploader);
