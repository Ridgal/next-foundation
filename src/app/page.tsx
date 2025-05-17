import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="font-sans">
      <main>
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <Button size={"lg"} className="p-16 w-3xl">
          Click me
        </Button>
      </main>
    </div>
  );
}

export default Home;
