import { Accordion, Heading } from '@navikt/ds-react';
import checkPersonalData from '../analysis/checkPersonalData';

interface Props {
    value: string;
}

function PersonalData({ value }: Props) {
    const { emails, names, phonenumbers } = checkPersonalData(value);

    if (emails.length === 0 && names.length === 0 && phonenumbers.length === 0) {
        return null;
    }

    return (
        <Accordion.Item>
            <Accordion.Header>
                {emails.length + phonenumbers.length + names.length}{' '}
                {emails.length + phonenumbers.length + names.length === 1 ? (
                    <> mulig personopplysning</>
                ) : (
                    <>mulige personopplysninger</>
                )}
            </Accordion.Header>
            <Accordion.Content>
                {emails.length >= 1 && (
                    <>
                        <Heading spacing level="3" size="xsmall">
                            E-postadresser
                        </Heading>
                        <ul>
                            {emails.map((email, index) => (
                                <li key={index}>"{email}"</li>
                            ))}
                        </ul>
                    </>
                )}
                {phonenumbers.length >= 1 && (
                    <>
                        <Heading spacing level="3" size="xsmall">
                            Telefonnummer
                        </Heading>
                        <ul>
                            {phonenumbers.map((phonenumber, index) => (
                                <li key={index}>"{phonenumber}"</li>
                            ))}
                        </ul>
                    </>
                )}
                {names.length >= 1 && (
                    <>
                        <Heading spacing level="3" size="xsmall">
                            Navn
                        </Heading>
                        <ul>
                            {names.map((name, index) => (
                                <li key={index}>"{name}"</li>
                            ))}
                        </ul>
                    </>
                )}
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default PersonalData;
