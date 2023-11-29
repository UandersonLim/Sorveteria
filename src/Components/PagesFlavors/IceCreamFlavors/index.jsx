import { Main_Section, Title, Main } from "./style";

const Ice_Cream_Flavors = () => {
  return (
    <Main>
      <Title>
        <h1>SABORES DE SORVETE</h1>
      </Title>
      <Main_Section>
        <div className="Card">
          <figure>
            <img
              src="assets/imagens/sabor-oreo.png"
              title="Sabor Oreo"
              alt="Sabor Oreo"
            />
          </figure>
          <h2>Sorvete de Oreo</h2>
          <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
        </div>
        <div className="Card">
          <figure>
            <img
              src="assets/imagens/sabor-pistache.png"
              title="Sabor Pistache"
              alt="Sabor Pistache"
            />
          </figure>
          <h2>Sorvete Pistache</h2>
          <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
        </div>
        <div className="Card">
          <figure>
            <img
              src="assets/imagens/sabor-cookies-avela.png"
              title="Sabor Cookie-avela"
              alt="Sabor Cookie-avela"
            />
          </figure>
          <h2>Sorvete Cookies & Avelã</h2>
          <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
        </div>
        <div className="Card">
          <figure>
            <img
              src="assets/imagens/sorbet-kiwi.png"
              title="Sabor Kiwi"
              alt="Sabor Kiwi"
            />
          </figure>
          <h2>Sorvete de Kiwi</h2>
          <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
        </div>
        <div className="Card">
          <figure>
            <img
              src="assets/imagens/sorbet-morango.png"
              title="Sabor Morango"
              alt="Sabor Morango"
            />
          </figure>
          <h2>Sorvete de Morango</h2>
          <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
        </div>
        <div className="Card">
          <figure>
            <img
              src="assets/imagens/sorbet-limao.png"
              title="Sabor Limão"
              alt="Sabor Limão"
            />
          </figure>
          <h2>Sorvete de Limão Siciliano</h2>
          <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
        </div>
      </Main_Section>
    </Main>
  );
};

export default Ice_Cream_Flavors;
