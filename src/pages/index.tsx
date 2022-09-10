import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react"

import shirtOne from "../assets/shirt/01.png"
import shirtTwo from "../assets/shirt/02.png"
import shirtThree from "../assets/shirt/03.png"

import "keen-slider/keen-slider.min.css"

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
