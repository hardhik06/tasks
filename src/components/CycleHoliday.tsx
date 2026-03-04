import React, { useState } from "react";
import type { ReactElement } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🦃" | "❤️";

const ALPHABET_NEXT: Record<Holiday, Holiday> = {
    "❤️": "🎃",
    "🎃": "🎄",
    "🎄": "🎆",
    "🎆": "🦃",
    "🦃": "❤️",
};

const YEAR_NEXT: Record<Holiday, Holiday> = {
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "❤️",
    "❤️": "🎆",
};

export function CycleHoliday(): ReactElement {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={() => { setHoliday(ALPHABET_NEXT[holiday]); }}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => { setHoliday(YEAR_NEXT[holiday]); }}>
                Advance by Year
            </Button>
        </div>
    );
}
