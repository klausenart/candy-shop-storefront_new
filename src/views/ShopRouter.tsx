import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ActivityView from './ActivityView';
import AuctionsView from './AuctionsView';
import CustomTokenMarketplace from './CustomTokenMarketplace';
import Drop from './Drop';
import Marketplace from './Marketplace';
import MarketplaceWithFilter from './MarketplaceWithFilter';
import MarketplaceWithUrl from './MarketplaceWithUrl';
import MyCollection from './MyCollection';
import SingleOrder from './SingleOrder';
import Klausenart from './Klausenart';
import PFPs from './PFPs';
import Collectibles from './Collectibles';
import Art from './Art';
import Info from './Info';
import Home from './Home';
import Tokenomics from './Tokenomics';
import TopNav from '@/components/TopNav';
import { RouteName } from '@/constant/routeNames';
import { useUpdateShop } from '@/hooks/useUpdateShop';

export const ShopRouter = () => {
  useUpdateShop();
  return (
    <main>
      <MainContainer>
        <TopNav />
        <Routes>
          <Route path={RouteName.home} element={<Home />} />
          <Route path={RouteName.marketplaceMint} element={<SingleOrder />} />
          <Route path={RouteName.sell} element={<MyCollection />} />
          <Route path={RouteName.auctionsView} element={<AuctionsView />} />
          <Route path={RouteName.drop} element={<Drop />} />
          <Route path={RouteName.activityView} element={<ActivityView />} />
          <Route path={RouteName.customToken} element={<CustomTokenMarketplace />} />
          <Route path={RouteName.multipleCollection} element={<MarketplaceWithFilter />} />
          <Route path={RouteName.marketplaceWithUrl} element={<MarketplaceWithUrl />} />
          <Route path={RouteName.klausenart} element={<Klausenart />} />
          <Route path={RouteName.pfps} element={<PFPs />} />
          <Route path={RouteName.digitalCollectibles} element={<Collectibles />} />
          <Route path={RouteName.digitalArt} element={<Art />} />
          <Route path={RouteName.info} element={<Info />} />
          <Route path={RouteName.tokenomics} element={<Tokenomics />} />
        </Routes>
      </MainContainer>
    </main>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  margin-right: 4%;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
`;
