import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import { H1, LongText, ListItem } from '../../components/Typography';

const ForCompanies = () => {
  const { t } = useTranslation('forCompanies');

  return (
    <Layout titleKey={t('metaTitle')}>
      <HeaderPicture img="/yrityksille-paavo.jpg" alt="Paavon lakitus" />
      <H1>{t('forCompaniesHeading')}</H1>
      <LongText>{t('forCompaniesBody')} </LongText>
      <ul className="list-decimal mb-8 mx-16">
        <ListItem>Paavo Nurmen patsaan lakituksessa</ListItem>
        <ListItem>Wapputapahtumissa</ListItem>
        <ListItem>Syksyn fuksitapahtumassa</ListItem>
      </ul>
      <LongText>
        Lisäksi keskustelemme mielellämme potentiaalisista muista yhteistyömahdollisuuksista! Meihin saa yhteyttä
        laittamalla viestiä osoitteeseen:{' '}
        <a className="underline" href="mailto:teekkarikomissio@lists.utu.fi">
          teekkarikomissio@lists.utu.fi
        </a>
      </LongText>
    </Layout>
  );
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['forCompanies', 'common', 'nav'];

  return {
    props: {
      lang,
      namespaces,
      translations: namespaces.map(namespace => ({
        namespace,
        translatedStrings: TranslationStrings[lang] && TranslationStrings[lang][namespace],
      })),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'fi' } }, { params: { lang: 'sv' } }],
    fallback: false,
  };
}

export default withLocalization(ForCompanies);
