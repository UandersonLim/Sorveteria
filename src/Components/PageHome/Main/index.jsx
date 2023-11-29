import { Card, SectionContent } from "./style";

const Main = () => {
  return (
    <main>
      <SectionContent>
        <Card>
          <figure>
            <img
              src="assets/imagens/banner-sabores.jpg"
              alt="banner_sabores"
              title="Banner_Sabores"
              className="Image_Card"
            />
          </figure>
          <div className="Text_Main">
            <h3>Nossos produtos</h3>
            <p className="subtitle_paragraph">Novos e deliciosos!</p>
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              gelateria todos os nossos produtos são naturais, à base de frutas
              e sem nenhum conservante! Também temos opções sem lactose e sem
              açúcar. Venha conhecer e perceber que tem como o sorvete ser
              delicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </Card>
        <Card>
          <section className="Inversion_column">
            <div className="Text_Main">
              <h3>NOSSOS EVENTOS</h3>
              <p className="subtitle_paragraph">Delicias com sorvete!</p>
              <p>
                Mais do que uma sorveteria, uma extensão da sua casa! Estamos
                aqui prontinhos para te atender e oferecer os melhores eventos
                com os melhores sorvete da sua vida! Venha nos conhecer e passar
                um tempo aqui com a gente.
              </p>
            </div>
            <figure>
              <img
                src="assets/imagens/eventos-image.jpg"
                alt="Eventos imagem"
                title="Eventos Imagem"
                className="Image_Card"
              />
            </figure>
          </section>
        </Card>
        <Card>
          <figure>
            <img
              src="assets/imagens/sobre-image.jpg"
              tile="Pessoas_Sorvete"
              alt="Pessoas_Sorvete"
              className="Image_Card"
            />
          </figure>
          <div className="Text_Main">
            <h3>SOBRE NÓS</h3>
            <p className="subtitle_paragraph">Alegria em cada casquinha!</p>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
        </Card>
      </SectionContent>
    </main>
  );
};

export default Main;
