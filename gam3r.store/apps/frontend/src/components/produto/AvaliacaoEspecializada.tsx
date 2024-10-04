import { Produto } from "@gstore/core";

export interface AvaliacaoEspecializadaProps {
  produto: Produto;
}

export default function AvaliacaoEspecializada(
  props: AvaliacaoEspecializadaProps
) {
  const { produto } = props;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🎯</span>
          <span className="text-2xl font-semibold">
            Avaliação Especializada
          </span>
        </div>
        <p className="font-light text-zinc-300">
          *As avaliações que apresentamos não são desenvolvidos por nós, mas sim
          por canais especializados em tecnologia, que trazem uma análise
          aprofundada e imparcial dos produtos.
        </p>
      </div>
      <div className="relative lg:h-[500px]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={produto?.videoReview}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
