import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camisa x</h1>
                <span>R$ 79,90</span>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Adipisci, pariatur quia. Excepturi, consequatur nemo. 
                    Praesentium, sequi eveniet! Architecto blanditiis quam, 
                    consequuntur dicta quibusdam culpa molestias nostrum id 
                    numquam quisquam neque.
                </p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}