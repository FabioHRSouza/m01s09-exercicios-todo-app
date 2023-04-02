//import { Avatar } from "../components/Avatar";
//import { Bio } from "../components/Bio";
import { Usuario } from "../components/Usuario";
import Bio from "../components/Bio";
import Avatar from "../components/Avatar";

const redes = [
  {
    icone: "bi-linkedin",
    link: "https://www.linkedin.com/in/fabiohrsouza/",
  },
  {
    icone: "bi-instagram text-danger",
    link: "https://www.instagram.com/fabiohrsouza/",
  },
  {
    icone: "bi-github text-light-emphasis",
    link: "https://github.com/FabioHRSouza",
  },
];

export const QuemSou = () => {
  return (
    <div className="">
      <div className="row border-bottom py-2">
        <div className="col-2">
          <Avatar
            src="https://avatars.githubusercontent.com/u/92132323?v=4"
            alt="Fábio H R Souza - Student Dev - Full Stack Itaguaçu"
          />
        </div>
        <div className="col ">
          <Usuario nome="Fábio H R Souza" cargo="Full Stack Junior" redes={redes} />
        </div>
      </div>
      <div className="row mt-4">
        <Bio>
          <p className="fw-light">
            Filho do Alvaricio e da Dona Cleusa, nascido em Londrina - PR, temente a Deus,
            cidadão do mundo desde 1979, casado e a apaixonado pela Patricia (a PatyKoka),  
            pai da Nicole(Ni) e da Amanda(Di) e do Simba, o pincher peludo(spitz alemão. kkk). 
          </p>
          <p className="fw-light">
            Vendedor por Natureza, tenta vender o que sabe, e o que não sabe busca sempre,
            sempre aprender mais. Graduado em Recursos Humanos, pois gosta valorizar as pessoas,
            e entende que esse é o maior valor de uma empresa, graduado em Analise e desenvolvimento 
            de sistemas, pois queria ter um hobie, criar algumas páginas e blogs na internet.
            Atualmente divide seu tempo sendo graduando em administração de empresas, trabalhando, 
            cursando Full stack no Sesi-Senai e curtindo a sua Família, Seu bem mais precioso.
          </p>
        </Bio>
      </div>
    </div>
  );
};
