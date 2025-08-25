import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition, memo } from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import locales from "@/constants/locales";

function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <Select
      defaultValue={locale}
      onValueChange={handleLocaleChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-auto text-black/70 hover:text-black gap-2 select-none bg-transparent border-none focus:outline-none shadow-none focus:ring-0 focus:ring-offset-0">
        <Globe className="w-4 h-4 text-black/70" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(locales).map(([code, name]) => (
            <SelectItem key={code} value={code}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default memo(LocaleSwitcher);
