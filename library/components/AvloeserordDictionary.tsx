import {Accordion, Link, ReadMore} from '@navikt/ds-react';
import {
    ExternalLinkIcon
} from '@navikt/aksel-icons';
import checkAvloeserord from '../analysis/checkAvloeserord';

interface Props {
    value: string;
}

function AvloeserDictionary({ value }: Props) {
    const { avloeserordMatches, datatermerMatches } = checkAvloeserord(value);

    if (avloeserordMatches.length === 0 && datatermerMatches.length === 0) {
        return null;
    }

    return (
        <>
            <Accordion.Item>
                <Accordion.Header>
                    {avloeserordMatches.length + datatermerMatches.length == 1 ? (
                        <>1 mulig avløserord</>
                    ) : (
                        <>{`${avloeserordMatches.length + datatermerMatches.length} mulige avløserord`}</>
                    )}
                </Accordion.Header>
                <Accordion.Content>
                    <p>Norske ord som kan brukes i stedet for de tilsvarende engelske:</p>
                    {avloeserordMatches.length > 0 && (
                        avloeserordMatches.map((ordliste) => (
                            <ReadMore key={`ordliste-${ordliste.importord}`} header={'"' + ordliste.importord + '"'}>
                                Forslag til alternativer: {ordliste.avloeserord}
                            </ReadMore>
                            )
                    ))}
                    {datatermerMatches.length > 0 && (
                        datatermerMatches.map((ordliste) => (
                            <ReadMore key={`dataterm-${ordliste.ord}`} header={'"' + ordliste.ord + '"'}>
                                Forslag til alternativer: {ordliste.bokmaal}

                                <p>{ordliste.definisjon}</p>
                            </ReadMore>
                            ))
                    )}
                    {avloeserordMatches.length > 0 && (
                        <><br/>Kilde: <Link
                        target="_blank"
                        href="https://www.sprakradet.no/sprakhjelp/Skriverad/Avloeysarord/"
                        >
                        På godt norsk – avløserord
                        <ExternalLinkIcon />
                        </Link></>
                    )}
                    {datatermerMatches.length > 0 && (
                        <><br/>Kilde: <Link
                            target="_blank"
                            href="https://www.sprakradet.no/sprakhjelp/Skriverad/Ordlister/Datatermar/"
                        >
                            Språkrådets datatermer <ExternalLinkIcon />
                        </Link></>
                    )}

                </Accordion.Content>
            </Accordion.Item>
        </>
    );
}

export default AvloeserDictionary;
