import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎃" | "🦃" | "🧧" | "🎆";

const ALPHABET_NEXT: Record<Holiday, Holiday> = {
    "🎄": "🎆", // Christmas -> Fireworks
    "🎆": "🧧", // Fireworks -> Lunar New Year
    "🧧": "🎃", // Lunar New Year -> Pumpkin
    "🎃": "🦃", // Pumpkin -> Turkey
    "🦃": "🎄", // Turkey -> Christmas
};

const YEAR_NEXT: Record<Holiday, Holiday> = {
    "🧧": "🎆", // Lunar New Year (Jan/Feb) -> Fireworks (July)
    "🎆": "🎃", // Fireworks (July) -> Pumpkin (Oct)
    "🎃": "🦃", // Pumpkin (Oct) -> Turkey (Nov)
    "🦃": "🎄", // Turkey (Nov) -> Christmas (Dec)
    "🎄": "🧧", // Christmas (Dec) -> Lunar New Year (Jan/Feb)
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

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
