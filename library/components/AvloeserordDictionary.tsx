import { Accordion, Heading, Link } from '@navikt/ds-react';
import { ReactComponent as ExternalLinkIcon } from './ExternalLink.svg';
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
                    Norske ord som kan brukes i stedet for de tilsvarende engelske:
                    {avloeserordMatches.length > 0 && (
                        <Accordion>
                            {avloeserordMatches.map((ordliste) => (
                                <Accordion.Item key={`ordliste-${ordliste.importord}`}>
                                    <Accordion.Header>
                                        <span>"{ordliste.importord}"</span>
                                    </Accordion.Header>
                                    <Accordion.Content>
                                        <Heading spacing level="4" size="xsmall">
                                            Avløserord
                                        </Heading>
                                        <p>{ordliste.avloeserord}</p>
                                        <Heading spacing level="4" size="xsmall">
                                            Kilde
                                        </Heading>
                                        {
                                            <Link
                                                target="_blank"
                                                href="https://www.sprakradet.no/sprakhjelp/Skriverad/Avloeysarord/"
                                            >
                                                På godt norsk – avløserord
                                                <ExternalLinkIcon />
                                            </Link>
                                        }
                                    </Accordion.Content>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    )}
                    {datatermerMatches.length > 0 && (
                        <Accordion>
                            {datatermerMatches.map((ordliste) => (
                                <Accordion.Item key={`dataterm-${ordliste.ord}`}>
                                    <Accordion.Header>
                                        <span>"{ordliste.ord}"</span>
                                    </Accordion.Header>
                                    <Accordion.Content>
                                        <Heading spacing level="4" size="xsmall">
                                            Avløserord
                                        </Heading>
                                        <p>{ordliste.bokmaal}</p>
                                        <Heading spacing level="4" size="xsmall">
                                            Definisjon/forklaring
                                        </Heading>
                                        <p>{ordliste.definisjon}</p>
                                        <Heading spacing level="4" size="xsmall">
                                            Kilde
                                        </Heading>
                                        {
                                            <Link
                                                target="_blank"
                                                href="https://www.sprakradet.no/sprakhjelp/Skriverad/Ordlister/Datatermar/"
                                            >
                                                Språkrådets datatermer <ExternalLinkIcon />
                                            </Link>
                                        }
                                    </Accordion.Content>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    )}
                </Accordion.Content>
            </Accordion.Item>
        </>
    );
}

export default AvloeserDictionary;
