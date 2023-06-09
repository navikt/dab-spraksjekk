import { Accordion, Heading } from '@navikt/ds-react';
import checkComma from '../analysis/checkComma';

interface Props {
    value: string;
}

function CommaCheck({ value }: Props) {
    const { matches } = checkComma(value);

    return (
        <>
            {matches != 0 && (
                <Accordion.Item>
                    <Accordion.Header>
                        {matches == 1 ? (
                            <>1 tilfelle av manglende komma</>
                        ) : (
                            <>{matches} tilfeller av manglende komma</>
                        )}
                    </Accordion.Header>
                    <Accordion.Content className="">
                        <Heading spacing level="3" size="xsmall">
                            Alltid komma foran "men"
                        </Heading>
                        Det er {matches == 1 ? <>ett tilfelle</> : <>{matches} tilfeller</>} i teksten der det mangler
                        komma foran "men".
                    </Accordion.Content>
                </Accordion.Item>
            )}
        </>
    );
}

export default CommaCheck;
