import React, { useState } from "react";
import type { ReactElement } from "react";
import { Button } from "react-bootstrap";

export function Counter(): ReactElement {
    const [value, setValue] = useState<number>(0);

    return (
        <span>
            <Button
                onClick={(): void => {
                    setValue((prevValue: number): number => prevValue + 1);
                }}
            >
                Add One
            </Button>
            to {value}.
        </span>
    );
}
