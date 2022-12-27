import React from 'react';
import Picture1 from './Picture1.png';
import rg from './rg2.png';

const Home = () => {
  return (
    <>
      <div className="home"></div>
      <p className="pesan">Studi Independen Bersertifikat</p>
      <p className="pesan">Frontend Engineering</p>
      <p className="pesan">Di PT Ruang Raya Indonesia</p>
      <div className="gambar">
        <img src={Picture1} />;
        <img src={rg} />;
      </div>
    </>
  );
};

export default Home;
