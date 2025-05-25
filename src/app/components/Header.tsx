"use client";
import React from "react";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const t = useTranslations();
  const { setTheme, theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    router.replace("/", { locale: value });
  };

  console.log(pathname);

  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-10! flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">YourLogo</span>
        </div>

        <div className="flex items-center gap-4">
          <Select value={pathname} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className={theme === "light" ? "bg-accent" : ""}
                onClick={() => setTheme("light")}
              >
                {t("theme.light")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className={theme === "dark" ? "bg-accent" : ""}
                onClick={() => setTheme("dark")}
              >
                {t("theme.dark")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className={theme === "system" ? "bg-accent" : ""}
                onClick={() => setTheme("system")}
              >
                {t("theme.system")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export { Header };
