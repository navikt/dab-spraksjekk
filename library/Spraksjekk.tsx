import React, {useCallback, useEffect} from 'react';
import { Accordion } from '@navikt/ds-react';
import {
  AvloeserordDictionary,
  CommaCheck,
  DublicateWords,
  KansellistenDictionary,
  LongParagraphs,
  LongSentences,
  LongWords,
  NrkDictionaries,
  PersonalData,
  Tools,
} from './analysis/warningAccordion';

interface Props {
  value?: string;
  open?: boolean;
}

export const Spraksjekk = ({ value, open }: Props) => {
  if (!value || !open) {
    return null;
  }

  return (
    <Accordion>
      <LongParagraphs content={value} />
      <LongSentences content={value} />
      <LongWords content={value} />
      <DublicateWords content={value} />
      <KansellistenDictionary content={value} />
      <NrkDictionaries content={value} />
      <AvloeserordDictionary content={value} />
      <CommaCheck content={value} />
      <PersonalData content={value} />
      <Tools content={value} />
    </Accordion>
  );
};
