import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';


const Tokenomics: React.FC = () => {
 return(
    <DesContainer>

        
        <div style={BG_Img}>
          <div style={BG_Txt}>
          <h1> Tokenomics</h1>
            <p><b><u>Introduction</u></b></p>
            <p> Klausen Art (KART) is a Solana SPL Token minted on the Solana Blockchain. There is a maximum amount of 10 Million KART. No more token can be ever created, meaning the tokens mint account has been freezed! </p>
            <b>The token address is:</b> GDzfemoYR5GkbK4YupYpyq3E8Du9fSfKXxKDpkdrqGjs 
            <a href="https://solscan.io/token/GDzfemoYR5GkbK4YupYpyq3E8Du9fSfKXxKDpkdrqGjs"> <b>(Check $KART on Solscan)</b> </a>
            </p>
           </div>
            <br>

            <p><b><u>Liquidity</b></u></p>
            <p>Over the last months, $KART liquidity has benn increased on Raydium LPs, with 9 million KART placed in liquidity pools. At the time of writing, the TVL is approximately 6.6k $, with KART liquidity provided by multiple SPL tokens ($USDC, $SOL, $ATLAS, $BONK, $BATT) of the Solana ecosystem.
            </p>
            <br>
            <div style ={{display:'flex', justifyContent:'center'}}>
                        <img
                        src="/LiquidityPools.png"
                        alt="Liquidity_Pools"
                        style={{maxWidth: '100%', maxHeight: '600px',  height:'auto'}} />
            </div>

            <br>

            <p><b><u>Token distribution</b></u></p>
            <p>The figure shows the current $KART token distribution:</p>

            &emsp;- open market (free available)<br>
            &emsp;- community (early birds)<br>
            &emsp;- buyback prog. (for continously increasing liquidity)<br>
            &emsp;- burned (by hodlers)<br>

            <br>
            <div style ={{display:'flex', justifyContent:'center'}}>
                        <img
                        src="/KART_Distribution.jpg"
                        alt="KART_Distribution"
                        style={{maxWidth: '100%', maxHeight: '600px',  height:'auto'}} />
            </div>
            <br>

            <p><b><u>Token Vesting by MeanFinance</b></u></p>
            <p>The LP tokens of the liquidity pools are put into vesting contracts by meanfinance, and are streamed back to the KART foundation wallet. That streams have been setup for 2 years, as a first step, but will be extended by new vesting streams over time, as the project is evolving. </p>
            In other words: The LP tokens will be continuously emitted over the next two years to provide that no liquidity can be drawn off from the pools by the team, and therefore increasing the reputation and trust of the KART ecosystem.</p>
            Adding more liquidity over time will also result in new vesting contracts to support the growth of the ecosystem. This will be defined by the team based on future strategy, as reflected in the roadmap.</p>
            <u>In summary:</u><br>

            &emsp;-	Token locking: 8 Streams re-emitting Raydium LP tokens to foundation wallet<br>
            &emsp;-	Vesting contracts: token locking is irreversible (can’t be dissolved for rug pull)<br>
            &emsp;-	Time spawn: 2 years (ending  Q1/2025)<br>
            &emsp;-	Emission rate: linear (LP tokens are emitted in equal parts each month)<br>
            <br>
            <div style ={{display:'flex', justifyContent:'center'}}>
                        <img
                        src="/TokenStreams.png"
                        alt="Token_Streams"
                        style={{maxWidth: '100%', maxHeight: '600px',  height:'auto'}} />
            </div>
            <br>
            <p><b><u>Note</u></b></p>
            This is a very early idea of how the available KART is circulating in the ecosystem. The team is concerning of locking Team tokens successively with an expanded time range to provide a healthy tokenomics and growth of the project.
        
       </div>
    </DesContainer>
  );
};

export default Tokenomics;


const DesContainer = styled.div`
  width: 100%;
`;

const BG_Img = {

}
const BG_Txt = {

}
