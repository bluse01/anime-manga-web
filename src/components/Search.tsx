import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchProp {
  onSetTitle: (title: string) => void;
}

export default function Search({ onSetTitle }: SearchProp) {
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);

  return (
    <Field orientation="horizontal" className="mb-7 flex justify-center">
      <Input
        type="search"
        placeholder="Search..."
        className="w-1/3"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={() => onSetTitle(inputValue)}>Search</Button>
    </Field>
  );
}
