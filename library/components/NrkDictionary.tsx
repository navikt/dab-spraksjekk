import { Accordion, Heading, Link } from '@navikt/ds-react';
import { ReactComponent as ExternalLinkIcon } from './ExternalLink.svg';
import checkNrkDictionary from '../analysis/checkNrkDictionary';

interface Props {
    value: string;
}

function NrkDictionary({ value }: Props) {
    const matches = checkNrkDictionary(value);

    if (matches.length === 0) {
        return null;
    }

    return (
        <Accordion.Item>
            <Accordion.Header>
                {matches.length == 1 ? <>1 mulig støtende ord</> : <>{matches.length} mulige støtende ord</>}
            </Accordion.Header>
            <Accordion.Content>
                <Heading spacing level="3" size="xsmall">
                    Vær varsom
                </Heading>
                Ord i teksten som kan være støtende, eller som bør brukes med varsomhet:
                <Accordion>
                    {matches.map((ord) => (
                        <Accordion.Item key={ord.id}>
                            <Accordion.Header>
                                <span>"{ord.ord}"</span>
                            </Accordion.Header>
                            <Accordion.Content>
                                <Heading spacing level="4" size="xsmall">
                                    Forklaring
                                </Heading>
                                <p>{ord.bokmaal}</p>
                                <Heading spacing level="4" size="xsmall">
                                    Kilde
                                </Heading>
                                {
                                    <Link target="_blank" href={ord.lenke}>
                                        {ord.kilde}
                                        <ExternalLinkIcon />
                                    </Link>
                                }
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default NrkDictionary;
