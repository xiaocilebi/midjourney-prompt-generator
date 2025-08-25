import { useState, memo } from "react";
import { useTranslations } from "next-intl";
import copy from "copy-to-clipboard";
import dayjs from "dayjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type Props = {
  item: Showcase;
  className?: string;
  onSelected?: (item: Showcase) => void;
  onDelete?: (id: string) => void;
};

function HistoryItem({ className, item, onSelected, onDelete }: Props) {
  const t = useTranslations();
  const [waitingCopy, setWaitingCopy] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    setWaitingCopy(true);
    copy(text);
    setTimeout(() => {
      setWaitingCopy(false);
    }, 1200);
  };

  return (
    <div className={className}>
      <Accordion type="single" collapsible>
        <AccordionItem className="last:border-b-0" value={item.id || item.uuid}>
          <AccordionTrigger
            className="flex gap-4 w-full text-base font-normal py-3 hover:no-underline"
            title={item.text}
          >
            <p className="truncate">{item.text}</p>
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <p>{item.prompt}</p>
            <div className="flex justify-between">
              <div className="leading-8 text-gray-800">
                {dayjs(item.time).format("YYYY-MM-DD HH:mm:ss")}
              </div>
              <div>
                <Button
                  className="h-8"
                  size="sm"
                  variant="link"
                  onClick={() => handleCopy(item.prompt)}
                >
                  {waitingCopy
                    ? t("Component.HistoryItem.copied")
                    : t("Component.HistoryItem.copy")}
                </Button>
                {onDelete ? (
                  <Button
                    className="h-8"
                    size="sm"
                    variant="link"
                    onClick={() => {
                      if (item.id) onDelete(item.id);
                    }}
                  >
                    {t("Component.HistoryItem.delete")}
                  </Button>
                ) : null}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {item.uuid ? (
        <div className="grid grid-cols-4 gap-1.5 max-sm:grid-cols-2">
          {[0, 1, 2, 3].map((idx) => {
            return (
              <picture key={idx}>
                <img
                  className="h-auto mx-auto rounded-lg"
                  src={`https://cdn.midjourney.com/${item.uuid}/0_${idx}_384_N.webp`}
                  alt={`picture ${idx}`}
                  onClick={(ev) => {
                    if (onSelected && item.uuid) {
                      onSelected({
                        uuid: item.uuid,
                        prompt: item.prompt || "",
                        width: ev.currentTarget.width,
                        height: ev.currentTarget.height,
                        index: idx,
                        type: "image",
                        time: item.time || new Date(),
                      });
                    }
                  }}
                />
              </picture>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default memo(HistoryItem);
