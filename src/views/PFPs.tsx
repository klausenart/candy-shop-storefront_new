import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const PFPs: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Profile Pics'}
        description={'Want to impress with new style and push your social media to the next level? Then this is for you!'}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        filters={FILTERS}
        shopFilters = {false}
        

        
      />
    </DesContainer>
  );
};

export default PFPs;

const FILTERS = [
  { name: 'gLitCh_eRR0r / Aliens', collectionId: '1', identifier: 0 },
  { name: 'gLitCh_eRR0r / Angels', collectionId: '2', identifier: 0 },
  { name: 'gLitCh_eRR0r / Ants', collectionId: '3', identifier: 0 },
  { name: 'gLitCh_eRR0r / Apes', collectionId: '4', identifier: 0 },
  { name: 'gLitCh_eRR0r / Arabs', collectionId: '5', identifier: 0 },
  { name: 'gLitCh_eRR0r / Astronauts', collectionId: '6', identifier: 0 },
  { name: 'gLitCh_eRR0r / Fishes', collectionId: '7', identifier: 0 },
  { name: 'Steampunk / John', collectionId: '8', identifier: 0 },
  { name: 'Steampunk / Mary', collectionId: '9', identifier: 0 },
  { name: 'Steampunk / Rapunzel', collectionId: '10', identifier: 0 },
  { name: 'Steampunk / Musician', collectionId: '11', identifier: 0 },
  { name: 'Steampunk / Witch', collectionId: '12', identifier: 0 },
];

const DesContainer = styled.div`
  width: 100%;
  .candy-filter {
    color: #fff;
    li:hover {
      color: #7522f5;
    }
    .candy-search input {
      padding: 10px 4px 10px 24px;
      width: 100%;
    }
  }
`;
