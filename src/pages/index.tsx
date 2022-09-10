import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react"

import shirtOne from "../assets/shirt/01.png"
import shirtTwo from "../assets/shirt/02.png"
import shirtThree from "../assets/shirt/03.png"
import shirtFour from "../assets/shirt/04.png"

import "keen-slider/keen-slider.min.css"
import { stripe } from "../lib/stripe";

export default function Home() {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
        <Image 
          src={shirtFour} 
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

export const getServerSideProps = async () => {
  const response = await stripe.products.list()

  console.log(response.data);
  
}
