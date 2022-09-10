import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirtOne from "../assets/shirt/01.png"
import shirtTwo from "../assets/shirt/02.png"
import shirtThree from "../assets/shirt/03.png"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image 
          src={shirtOne} 
          width={520} 
          height={480} 
          alt="" />

          <footer>
            <strong>Camisa X</strong>
            <span>R$ 79,90</span>
          </footer>
      </Product>

      <Product>
        <Image 
          src={shirtTwo} 
          width={520} 
          height={480} 
          alt="" />

          <footer>
            <strong>Camisa X</strong>
            <span>R$ 79,90</span>
          </footer>
      </Product>

      <Product>
        <Image 
          src={shirtThree} 
          width={520} 
          height={480} 
          alt="" />

          <footer>
            <strong>Camisa X</strong>
            <span>R$ 79,90</span>
          </footer>
      </Product>
    </HomeContainer>
  )
}
