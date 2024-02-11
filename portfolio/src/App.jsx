import Header from "./components/header";
import Intro from "./components/intro";
import Eu from "./components/eu";
import Projetos from "./components/projetos";
import Aside from "./components/aside";
import Footer from "./components/footer";


function App() {
  return(
    <>
      <Header/>
      <Aside/>
      <Intro/>
      <Eu/>
      <h1 className="ttl">Projetos📚</h1>
      <Projetos ttl = "t1" descricao = "Projeto desenvolvido no âmbito da cadeira de BDTSS"/>
      <Projetos ttl = "tt1" descricao = "Projeto desenvolvido no âmbito da cadeira de LAB4"></Projetos>
      <Projetos ttl = "ttt1" descricao = "Projeto desenvolvido no âmbito da cadeira de BDTSS"/>


    </>
  );

}

export default App
