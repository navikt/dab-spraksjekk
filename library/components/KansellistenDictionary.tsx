import {Accordion, Link, ReadMore} from '@navikt/ds-react';
import {
    ExternalLinkIcon
} from '@navikt/aksel-icons';
import checkKansellisten from '../analysis/checkKansellisten';

interface Props {
    value: string;
}

function KansellistenDictionary({ value }: Props) {
    const matches = checkKansellisten(value);

    if (matches.length === 0) {
        return null;
    }

    return (
        <Accordion.Item>
            <Accordion.Header>
                {matches.length == 1 ? <>1 ord som kan byttes ut</> : <>{matches.length} ord som kan byttes ut</>}
            </Accordion.Header>
            <Accordion.Content>
                <p>Ord og uttrykk som er utdaterte eller sier noe på en vanskeligere måte enn nødvendig.</p>
                {matches.length >= 1 && (
                    matches.map((match) => (
                            <ReadMore key={match.kanselliord} header={match.kanselliord}>
                                Forslag til alternativer: {match.alternativ_1}
                            </ReadMore>

                        ))
                )}
                <p>Kilde: <Link
                    target="_blank"
                    href="https://www.sprakradet.no/klarsprak/om-skriving/kansellisten/"
                >
                    Kansellisten
                    <ExternalLinkIcon />
                </Link></p>
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default KansellistenDictionary;
