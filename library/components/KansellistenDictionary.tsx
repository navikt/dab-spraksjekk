import { Accordion, Heading, Link } from '@navikt/ds-react';
import { ExternalLinkIcon } from '@navikt/aksel-icons';
import checkKansellisten from '../analysis/checkKansellisten';

interface Props {
    value: string;
}

function KansellistenDictionary({ value }: Props) {
    const { matches } = checkKansellisten(value);

    if (matches.length === 0) {
        return null;
    }

    return (
        <Accordion.Item>
            <Accordion.Header>
                {matches.length == 1 ? <>1 ord som kan byttes ut</> : <>{matches.length} ord som kan byttes ut</>}
            </Accordion.Header>
            <Accordion.Content>
                <Heading spacing level="3" size="xsmall">
                    Velg enkle ord
                </Heading>
                <div>Ord og uttrykk som er utdaterte eller sier noe på en vanskeligere måte enn nødvendig:</div>
                {matches.length >= 1 && (
                    <Accordion>
                        {matches.map((match) => (
                            <>
                                <Accordion.Item key="{kansellisten.id}">
                                    <Accordion.Header>
                                        <span>"{match.kanselliord}"</span>
                                    </Accordion.Header>
                                    <Accordion.Content>
                                        <Heading spacing level="4" size="xsmall">
                                            Forslag
                                        </Heading>
                                        Skriv heller: {match.alternativ_1}
                                        <Heading spacing level="4" size="xsmall">
                                            Kilde
                                        </Heading>
                                        <Link
                                            target="_blank"
                                            href="https://www.sprakradet.no/klarsprak/om-skriving/kansellisten/"
                                        >
                                            Kansellisten
                                            <ExternalLinkIcon />
                                        </Link>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </>
                        ))}
                    </Accordion>
                )}
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default KansellistenDictionary;
