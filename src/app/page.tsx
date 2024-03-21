import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 h-screen bg-blue-950 text-white flex">
      <div className="flex flex-col flex-1 max-w-xl mx-auto">
        <div className="flex-1">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Kvíz Finančný expert: Otestujte si svoje znalosti!
          </h1>
          <p className="leading-7 mt-2">
            Kvíz Finančný expert vám prináša 10 otázok s rôznou úrovňou obtiažnosti, ktoré preveria vaše chápanie kľúčových konceptov ako sú inflácia, investovanie, rizikové faktory, a mnoho ďalších. Otestujte si svoje vedomosti a zistite, ako ste na tom s finančnou gramotnosťou!
          </p>
        </div>
        <Link href='/quiz/financa-gramotnost' className={buttonVariants()}>
          Spustiť test
        </Link>
      </div>
    </div>
  );
}
