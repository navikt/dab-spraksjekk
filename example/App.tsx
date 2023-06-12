import '@navikt/ds-css';
import { Spraksjekk } from '../library';
import { Switch, Textarea } from '@navikt/ds-react';
import { useEffect, useState } from 'react';

export default function App() {
    const [value, setValue] = useState<string | undefined>(undefined);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Switch checked={open} onChange={() => setOpen(!open)}>
                Slå på språksjekk
            </Switch>
            <Textarea
                label="Skriv eller lim inn tekst"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <Spraksjekk value={value} open={open} />
        </>
    );
}
