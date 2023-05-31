import { Accordion, Heading, Link } from '@navikt/ds-react';
import { ExternalLinkIcon } from '@navikt/aksel-icons';

import {checkOrdliste} from "../textChecker";

function ordlisteCheck(props: { content: any }) {
  const { ordlisteResultater, datatermerResultater } = checkOrdliste(props.content)
  const ordlisteVisResultater = ordlisteResultater.length !== 0
  const datatermerVisResultater = datatermerResultater.length !== 0
  return (
    <>
      {ordlisteVisResultater && datatermerVisResultater && (
        <Accordion.Item>
          <Accordion.Header>
            {ordlisteResultater.length + datatermerResultater.length == 1 ? (
              <>1 mulig avløserord</>
            ) : (
              <>
                {ordlisteResultater.length + datatermerResultater.length} mulige
                avløserord
              </>
            )}
          </Accordion.Header>
          <Accordion.Content>
            Norske ord som kan brukes i stedet for de tilsvarende engelske:
            {ordlisteResultater && (
              <Accordion className="språkhjelp-inner-accordion språkhjelp-mt-4">
                {ordlisteResultater.map((ordliste, i) => (
                  <Accordion.Item key="">
                    <Accordion.Header className="språkhjelp-inner-accordion">
                      <span className="språkhjelp-firstLetter">
                        "{ordliste.importord}"
                      </span>
                    </Accordion.Header>
                    <Accordion.Content className="språkhjelp-inner-accordion-content">
                      <Heading spacing level="4" size="xsmall">
                        Avløserord
                      </Heading>
                      <p>{ordliste.avløserord}</p>
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
            {datatermerResultater && (
              <Accordion className="språkhjelp-inner-accordion">
                {datatermerResultater.map((ordliste, i) => (
                  <Accordion.Item key="">
                    <Accordion.Header className="språkhjelp-inner-accordion">
                      <span className="firstLetter">"{ordliste.ord}"</span>
                    </Accordion.Header>
                    <Accordion.Content className="språkhjelp-inner-accordion-content">
                      <Heading spacing level="4" size="xsmall">
                        Avløserord
                      </Heading>
                      <p>{ordliste.bokmål}</p>
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
      )}
    </>
  );
}

export default ordlisteCheck;
