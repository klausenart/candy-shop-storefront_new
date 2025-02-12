import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const Info: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={'Enable users to filter by collections and search for NFTs.'}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        filters={FILTERS}
        shopFilters = {false}
        search
        

        
      />
    </DesContainer>
  );
};

export default Info;

const FILTERS = [
  { name: 'Birdman', collectionId: '2', identifier: 1235887132 },
  { name: 'Mr. Doodle', collectionId: '3', identifier: 1235887133 },
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
