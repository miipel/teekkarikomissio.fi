import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import { H1, H2, LongText } from '../../components/Typography';
import useTranslation from '../../hooks/useTranslation';

const Yhdistys: React.FC = () => {
  const { t } = useTranslation();

  const boardMembers = [
    {
      img: '/tklogo.svg',
      name: 'Jeremi Nyyssönen',
      position: 'Puheenjohtaja',
      responsibilities: 'Puheenjohtaja, Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/tklogo.svg',
      name: 'Miika Peltotalo',
      position: 'Koulutuspoliittinen komissaari',
      responsibilities: 'Koulutuspolitiikka, nettisivut, vuosijuhlat',
    },
    {
      img: '/tklogo.svg',
      name: 'Casimir Ruohomaa',
      position: 'Varapääkomissaari',
      responsibilities: 'Valtuusto(vara), teekkarijohtajaforum',
    },
    {
      img: '/tklogo.svg',
      name: 'Juhani Kalske',
      position: 'Talouskomissaari',
      responsibilities: 'Valtuusto',
    },
    {
      img: '/tklogo.svg',
      name: 'Niklas Luomala',
      position: 'Kulttuurikomissaari',
      responsibilities: 'Paavo Nurmen patsaan lakitus, fuksiasiat, nuorten valiokunta, jäynäkisat',
    },
    {
      img: '/tklogo.svg',
      name: 'Ilona Kairinen',
      position: 'Tapahtumakomissaari,',
      responsibilities: 'Tapahtumat, Nuorten valiokunta(vara)',
    },
    {
      img: '/tklogo.svg',
      name: 'William Lindroos',
      position: 'Viestintäkomissaari',
      responsibilities: 'Kalenteriasiat, viestintä- ja kv-forum',
    },
    {
      img: '/tklogo.svg',
      name: 'Hektor Dahlberg',
      position: 'Sihteeri',
      responsibilities: 'Teekkarikulttuuriforum',
    },
  ];

  interface BoardCardProps {
    img: string;
    name: string;
    position: string;
    responsibilities: string;
  }

  const BoardCard: React.FC<BoardCardProps> = ({ img, name, position, responsibilities }) => {
    return (
      <div className="m-8 p-4 shadow-xl rounded-lg">
        <div className="flex flex-row flex-grow items-center justify-center ">
          <div className="w-1/3 h-auto items-center justify-center">
            <img src={img} alt={name} />
          </div>
          <div className="w-1/2 h-auto">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{position}</p>
            <p className="text-gray-700 text-base">{responsibilities}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout titleKey="yhdistys">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-white p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H1>{t('associationHeading')}</H1>
            <LongText>{t('associationContent')}</LongText>
          </div>
        </div>
      </div>
      <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700 my-4" />
      <div>
        <H2>Vuoden 2020 hallitus</H2>
        <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
          {boardMembers.map(({ img, name, position, responsibilities }) => (
            <BoardCard key={`${name}`} img={img} name={name} position={position} responsibilities={responsibilities} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default withLocale(Yhdistys);
