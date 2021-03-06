import React from "react";
import styled from "styled-components";

import Interview from "./Interview";
//import MultiMedia from './components/MultiMedia';
//import Goldstone from './components/Goldstone';
//import ArtistStatements from '/components/ArtistStatements';
import interviews from "../content/interviews";
//import multimedias from './content/multimedia';

const KamWai = styled.div`
  //
`;
const PearlLow = styled.div``;
const StyledContent = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100%;
  text-align: center;
`;
const Content = props => {
  const kamWai = interviews[0];
  const massyBooks = interviews[1];
  const baoBei = interviews[2];
  const mrsKuang = interviews[3];
  const emberWorks = interviews[4];
  const corningDrugs = interviews[5];
  const chauLuen = interviews[6];
  const bambooVillage = interviews[7];
  const houseOfRice = interviews[8];
  const mrsLi = interviews[9];
  const pearlLow = interviews[10];

  return (
    <StyledContent>
      <div>
        <h2>Content</h2>
      </div>
      <div>
        <KamWai>
          <Interview
            title={kamWai.title}
            subtitle={kamWai.subtitle}
            blurb={kamWai.blurb}
            content={kamWai.content}
            backgrounds={kamWai.backgrounds}
            links={kamWai.links}
            italicized={kamWai.italicized}
          />
        </KamWai>
        <div>
          <Interview
            title={massyBooks.title}
            subtitle={massyBooks.subtitle}
            blurb={massyBooks.blurb}
            content={massyBooks.content}
            backgrounds={massyBooks.backgrounds}
            links={massyBooks.links}
            italicized={massyBooks.italicized}
          />
        </div>
        <div>
          <Interview
            title={baoBei.title}
            subtitle={baoBei.subtitle}
            blurb={baoBei.blurb}
            content={baoBei.content}
            backgrounds={baoBei.backgrounds}
            links={baoBei.links}
            italicized={baoBei.italicized}
          />
        </div>
        <div>
          <Interview
            title={mrsKuang.title}
            subtitle={mrsKuang.subtitle}
            blurb={mrsKuang.blurb}
            content={mrsKuang.content}
            backgrounds={mrsKuang.backgrounds}
            links={mrsKuang.links}
            italicized={mrsKuang.italicized}
          />
        </div>
        <div>
          <Interview
            title={emberWorks.title}
            subtitle={emberWorks.subtitle}
            blurb={emberWorks.blurb}
            content={emberWorks.content}
            backgrounds={emberWorks.backgrounds}
            links={emberWorks.links}
            italicized={emberWorks.italicized}
          />
        </div>
        <div>
          <Interview
            title={corningDrugs.title}
            subtitle={corningDrugs.subtitle}
            blurb={corningDrugs.blurb}
            content={corningDrugs.content}
            backgrounds={corningDrugs.backgrounds}
            links={corningDrugs.links}
            italicized={corningDrugs.italicized}
          />
        </div>
        <div>
          <Interview
            title={chauLuen.title}
            subtitle={chauLuen.subtitle}
            blurb={chauLuen.blurb}
            content={chauLuen.content}
            backgrounds={chauLuen.backgrounds}
            links={chauLuen.links}
            italicized={chauLuen.italicized}
          />
        </div>
        <div>
          <Interview
            title={bambooVillage.title}
            subtitle={bambooVillage.subtitle}
            blurb={bambooVillage.blurb}
            content={bambooVillage.content}
            backgrounds={bambooVillage.backgrounds}
            links={bambooVillage.links}
            italicized={bambooVillage.italicized}
          />
        </div>
        <div>
          <Interview
            title={houseOfRice.title}
            subtitle={houseOfRice.subtitle}
            blurb={houseOfRice.blurb}
            content={houseOfRice.content}
            backgrounds={houseOfRice.backgrounds}
            links={houseOfRice.links}
            italicized={houseOfRice.italicized}
          />
        </div>
        <div>
          <Interview
            title={mrsLi.title}
            subtitle={mrsLi.subtitle}
            blurb={mrsLi.blurb}
            content={mrsLi.content}
            backgrounds={mrsLi.backgrounds}
            links={mrsLi.links}
            italicized={mrsLi.italicized}
          />
        </div>
        <PearlLow>
          <Interview
            title={pearlLow.title}
            subtitle={pearlLow.subtitle}
            blurb={pearlLow.blurb}
            content={pearlLow.content}
            backgrounds={pearlLow.backgrounds}
            links={pearlLow.links}
            italicized={pearlLow.italicized}
          />
        </PearlLow>
      </div>
    </StyledContent>
  );
};

export default Content;
