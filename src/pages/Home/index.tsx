
export function Home (){
    return(<>
    <main className="container p-6 max-w-4xl flex flex-col items-center">
        <img className="m-6 w-40 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/104803272?v=4" alt="photo perfil" />
        <p className="m-6 max-w-lg text-center">Oi, eu sou o Henrique! Desenvolvedor Web apaixonado por transformar ideias em soluções inovadoras </p>
        <div className=" m-2 flex flex-auto justify-around h-14 w-80">
           <a className="size-10 " href="mailto:contato@grceh.com"><img className="size-full" src="src/assets/img/envelope.svg" alt="email" /></a>
           <a className="size-10 "><img className="size-full" src="src/assets/img/github-mark.svg" alt="github" /><i className="bi bi-github"></i></a>
           <a className="size-10 "><img className="size-full" src="src/assets/img/instagram.svg" alt="instagram" /></a>
           <a className="size-10 "><img className="size-full" src="src/assets/img/linkedin.svg" alt="linkdin" /></a>
        </div>
    </main>
    </>
    )
}