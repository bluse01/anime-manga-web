import { Field } from "@/components/ui/field";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface SearchProp {
  onSetTitle: (title: string) => void;
}

export default function Search({ onSetTitle }: SearchProp) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onSetTitle(inputValue);
      }}
    >
      <Field orientation="horizontal" className="mb-7 flex justify-center">
        <InputGroup className="w-1/2">
          <InputGroupInput
            placeholder="Try searching for pages..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  );
}
