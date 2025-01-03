import { FunctionComponent } from 'react';
import { Accordion, BodyShort, List } from '@navikt/ds-react';
import checkPersonvernbrudd from '../analysis/checkPersonvernbrudd';

interface Props {
    userInput: string;
}

const Personvernbrudd: FunctionComponent<Props> = ({userInput}) => {
    const matches = checkPersonvernbrudd(userInput);

    if (matches.length === 0) {
        return null;
    }

    return (
        <Accordion.Item>
            <Accordion.Header>
                {matches.length == 1 ? <>1 mulig personvernbrudd</> : <>{matches.length} mulige personvernbrudd</>}
            </Accordion.Header>
            <Accordion.Content>
                <BodyShort spacing>Dette er ord eller begrep som bør unngås i arbeidsrettet oppfølging. For eksempel ord rundt kommunale ytelser.</BodyShort>
                <BodyShort spacing>
                    <List>
                        {matches.map(ord =>
                            <List.Item key={`personvernbrudd-${ord}`}>"{ord}"</List.Item>
                        )}
                    </List>
                </BodyShort>
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default Personvernbrudd;