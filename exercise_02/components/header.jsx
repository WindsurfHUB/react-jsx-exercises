import Button from "./button";

export default function Header() {
  return (
    <header className="bg-blue-300">
      <div className=" w-screen flex flex-wrap justify-between text-xl">
        <Button></Button>
        <h1>Current Temperature: 25&#8451;</h1>
      </div>
    </header>
  );
}


