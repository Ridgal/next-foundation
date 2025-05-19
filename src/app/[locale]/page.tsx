import { useTranslations } from "next-intl";

function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="font-sans">
      <main>
        <h1 className="text-3xl font-bold font-sans">{t("title")}</h1>
      </main>
    </div>
  );
}

export default Home;
