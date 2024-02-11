function Projetos(props){
    return(

            <div className="card">
                <img className="card-image" src="https://via.placeholder.com/450" alt="imagem de perfil"></img>
                <h2 className="card-title">{props.ttl}</h2>
                <p className="card-text">{props.descricao}</p>
            </div>   



    );
}

export default Projetos